import userRepository from "../repositories/auth.repository.js"
import PasswordUtil from "../utils/password.js"
import JwtUtil from "../utils/jwt.js"
import logger from "../config/logger.js"
import redisClient from "../config/redis.config.js"
import UsernameGenerator from "../utils/usernameGenerater.js"
import { performance } from "node:perf_hooks"

class AuthService {

  // ----------- Register ------------------

 async register(data, meta = {}) {

    const totalStart = performance.now();
    const timings = {};

    // Metadata
    const {
        ipAddress = null,
        browser = null,
        os = null,
        deviceName = null,
        deviceId = null,
    } = meta;

    const email = data.email.toLowerCase();

    // ---------------- Find User ----------------

    let start = performance.now();

    const existing = await userRepository.findByEmail(email);

    timings.findUser = performance.now() - start;

    if (existing) {
        throw new Error("Email already exists");
    }

    // ---------------- Generate Username ----------------

    start = performance.now();

    let username;
    let isUnique = false;

    while (!isUnique) {

        username = UsernameGenerator.generate(data.name, email);

        const exists = await userRepository.findByUsername(username);

        if (!exists) {
            isUnique = true;
        }
    }

    timings.username = performance.now() - start;

    // ---------------- Hash Password ----------------

    start = performance.now();

    const hashedPassword = await PasswordUtil.hash(data.password);

    timings.hashPassword = performance.now() - start;

    // ---------------- Create User ----------------

    start = performance.now();

    const user = await userRepository.create({

        ...data,

        email,

        username,

        password: hashedPassword,

        identifier: [email, username],

        provider: "local",

        accountStatus: "pending",

        role: "student"

    });

    timings.createUser = performance.now() - start;

    // ---------------- JWT ----------------

    start = performance.now();

    const userId = user._id.toString();

    const accessToken = JwtUtil.generateAccessToken({

        id: userId,

        role: user.role

    });

    const refreshToken = JwtUtil.generateRefreshToken({

        id: userId

    });

    timings.jwt = performance.now() - start;

    // ---------------- Session ----------------

    await userRepository.createSession({

        userId: user._id,

        deviceId,

        deviceName,

        browser,

        os,

        ipAddress,

        lastSeen: new Date(),

        expiresAt: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        )

    });


    // ---------------- Redis ----------------

    await redisClient.set(

        `auth:refresh:${userId}:${deviceId}`,

        refreshToken,

        {

            EX: 7 * 24 * 60 * 60

        }

    );

    // ---------------- Profiling ----------------

   timings.total = performance.now() - totalStart;

     console.table(timings);


    return {

        user,

        accessToken,

        refreshToken,
        profiling:
            process.env.NODE_ENV !== "production"
                ? timings
                : undefined

    };

}

  // ------------- Login -----------
async login(identifier, password, meta, requireRole = null) {

  const totalStart = performance.now();
  const timings = {};

  // Metadata
  const {
    ipAddress = null,
    browser = null,
    os = null,
    deviceName = null,
    deviceId = null,
  } = meta;

  const normalized = identifier.toLowerCase();

  // Find User
  let start = performance.now();

  const user = await userRepository.findByEmailOrUsername(normalized);

  timings.findByEmailOrUsername = performance.now() - start;

  if (!user) {
    throw new Error("User not found");
  }

  // Compare Password
  start = performance.now();

  const valid = await PasswordUtil.compare(password, user.password);

  timings.passwordCompare = performance.now() - start;

  if (!valid) {
    const update = await userRepository.incrementFailedAttempts(user._id);

    if(update.incrementFailedAttempts>=3){
       await userRepository.updateById(user._id, {
            lockUntil: new Date(Date.now() + 30 * 60 * 1000),
        });
          throw new Error("Account locked for 30 minutes");

    }
    throw new Error("Invalid password");
  }

  // Role Check
  if (requireRole && user.role !== requireRole) {
    throw new Error("User does not have required role");
  }

  const userId = user._id.toString();

  // Generate Tokens
  start = performance.now();

  const accessToken = JwtUtil.generateAccessToken({
    id: userId,
    role: user.role,
  });

  const refreshToken = JwtUtil.generateRefreshToken({
    id: userId,
  });

  timings.generateTokens = performance.now() - start;


  
    // ---------------- Login History ----------------

    console.log("Before LoginHistory");

const history = await userRepository.createLoginHistroy({
    userId: user._id,
    email: user.email,
    ipAddress,
    browser,
    deviceName,
    os,
    success: true
});

console.log("After LoginHistory");
console.log(history);

await userRepository.updateById(userId, {
  lastLogin: new Date(),
  lastLoginIP: ipAddress,
});

  // Store Refresh Token
  start = performance.now();

  await redisClient.set(
    `auth:refresh:${userId}`,
    refreshToken,
    {
      EX: 7 * 24 * 60 * 60,
    }
  );

  timings.redisSet = performance.now() - start;

  timings.total = performance.now() - totalStart;

  console.table(timings);

  return {
    user,
    accessToken,
    refreshToken,
    timings,
  };
}

// ---------- Google Oauth -------------

async oauthLogin(profile, provider, meta = {}) {

  const email = profile.emails?.[0]?.value;

  if (!email) {
    throw new Error(`${provider} account has no email`);
  }

  let user = await userRepository.findByEmail(email);

  if (!user) {

    const data = {
      name: profile.displayName,
      email,
      role: "student",
    };

    if (provider === "google") {
      data.googleId = profile.id;
    }

    if (provider === "github") {
      data.githubId = profile.id;
    }

    user = await userRepository.create(data);

  } else {

    const updateData = {};

    if (provider === "google" && !user.googleId) {
      updateData.googleId = profile.id;
    }

    if (provider === "github" && !user.githubId) {
      updateData.githubId = profile.id;
    }

    if (Object.keys(updateData).length > 0) {
      user = await userRepository.update(user._id, updateData);
    }
  }

  const userId = user._id.toString();

  const accessToken = JwtUtil.generateAccessToken({
    id: userId,
    role: user.role,
  });

  const refreshToken = JwtUtil.generateRefreshToken({
    id: userId,
  });

  // Multiple Device Support
  await redisClient.set(
    `auth:refresh:${userId}:${refreshToken}`,
    "valid",
    {
      EX: 7 * 24 * 60 * 60,
    }
  );


  // Session
  await sessionRepository.createSession({
    userId,
    ...meta,
  });

  return {
    user,
    accessToken,
    refreshToken,
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
async logoutAll(userId) {

  if (!userId) {
    throw new Error("User id required");
  }

  const keys = await redisClient.keys(
    `auth:refresh:${userId}:*`
  );

  if (keys.length) {
    await redisClient.del(keys);
  }

  await sessionRepository.deleteAllSessions(userId);

  return true;
}

}

export default new AuthService()