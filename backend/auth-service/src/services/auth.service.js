import userRepository from "../repositories/auth.repository.js"
import PasswordUtil from "../utils/password.js"
import JwtUtil from "../utils/jwt.js"
import logger from "../config/logger.js"
import redisClient from "../config/redis.config.js"
import UsernameGenerator from "../utils/usernameGenerater.js"

class AuthService {

  // ----------- Register ------------------
 async register(data) {

  const email = data.email.toLowerCase()

  const existing = await userRepository.findByEmail(email)

  if (existing) {
    throw new Error("Email already exists")
  }

  // ✅ Ensure unique username
  let username;
  let isUnique = false;

  while (!isUnique) {
    username = UsernameGenerator.generate(data.name, email)
    const exists = await userRepository.findByUsername(username)
    if (!exists) isUnique = true
  }

  const hashed = await PasswordUtil.hash(data.password)

  const user = await userRepository.create({
    ...data,
    email,
    username,
    password: hashed,
    identifier: [email, username] // ✅ fixed
  })

  const userId = user._id.toString()

  const accessToken = JwtUtil.generateAccessToken({
    id: userId,
    role: user.role
  })

  const refreshToken = JwtUtil.generateRefreshToken({
    id: userId
  })

  await redisClient.set(
    `auth:refresh:${userId}`, // ✅ better naming
    refreshToken,
    { EX: 7 * 24 * 60 * 60 }
  )

  return { user, accessToken, refreshToken }
}

  // ------------- Login -----------
 async login(identifier, password, requireRole = null) {

  const normalized = identifier.toLowerCase()

  const user = await userRepository.findByEmailOrUsername(normalized)

  if (!user) {
    throw new Error("User not found")
  }

  const valid = await PasswordUtil.compare(password, user.password)

  if (!valid) {
    throw new Error("Invalid password")
  }

  if (requireRole && user.role !== requireRole) {
    throw new Error("User does not have required role")
  }

  const userId = user._id.toString()

  const accessToken = JwtUtil.generateAccessToken({
    id: userId,
    role: user.role
  })

  const refreshToken = JwtUtil.generateRefreshToken({
    id: userId
  })

  await redisClient.set(
    `auth:refresh:${userId}`,
    refreshToken,
    { EX: 7 * 24 * 60 * 60 }
  )

  return { user, accessToken, refreshToken }
}

// ---------- Google Oauth -------------

  async findOrCreateGoogleUser(profile) {
  const email = profile.emails?.[0]?.value;

  if (!email) {
    throw new Error("Google account has no email");
  }

  let user = await userRepository.findByEmail(email);

  if (!user) {
    user = await userRepository.create({
      name: profile.displayName,
      email,
      googleId: profile.id,
      role: "student"
    });
  // } else if (!user.googleId) {
  //   user = await userRepository.update(user._id, {
  //     googleId: profile.id,
  //   });
  }

  const userId = user._id.toString();

  const accessToken = JwtUtil.generateAccessToken({
    id: userId,
    role: user.role
  });

  const refreshToken = JwtUtil.generateRefreshToken({
    id: userId,
    role: user.role
  });

  // ✅ Multiple session support
  await redisClient.set(
    `refresh:${userId}:${refreshToken}`,
    "valid",
    { EX: 7 * 24 * 60 * 60 }
  );

  return {
    user,
    accessToken,
    refreshToken
  };
}

// ---------- Github Oauth -------------

async findOrCreateGithubUser(profile) {
  const email = profile.emails?.[0]?.value;

  if (!email) {
    throw new Error("GitHub account has no email");
  }

  let user = await userRepository.findByEmail(email);

  if (!user) {
    user = await userRepository.create({
      name: profile.displayName,
      email,
      githubId: profile.id,
      role: "student"
    });
  // } else if (!user.githubId) {
  //   user = await authRepository.update(user._id, {
  //     githubId: profile.id,
  //   });
  }

  const userId = user._id.toString();

  const accessToken = JwtUtil.generateAccessToken({
    id: userId,
    role: user.role
  });

  const refreshToken = JwtUtil.generateRefreshToken({
    id: userId,
    role: user.role
  });

  return { 
    user, 
    accessToken, 
    refreshToken 
  };
}

// ----------- Refresh Token -----------------
  async refreshToken(refreshToken) {

    if (!refreshToken) {
      throw new Error("Refresh token required")
    }

    const decoded = JwtUtil.verifyRefreshToken(refreshToken)

    const storedToken = await redisClient.get(
      `refresh:${decoded.id}`
    )

    if (!storedToken || storedToken !== refreshToken) {
      throw new Error("Invalid refresh token")
    }

    const accessToken = JwtUtil.generateAccessToken({
      id: decoded.id
    })

    return { accessToken }
  }

// ------------- Logout ----------------
 async logout(userId) {

  if (!userId) {
    throw new Error("User id required");
  }

  await redisClient.del(`auth:refresh:${userId}`);

  return true;
}

}

export default new AuthService()