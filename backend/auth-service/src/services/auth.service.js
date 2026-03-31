import userRepository from "../repositories/user.repository.js"
import PasswordUtil from "../utils/password.js"
import JwtUtil from "../utils/jwt.js"
import logger from "../config/logger.js"
import redisClient from "../config/redis.config.js"

class AuthService {

  // ================= REGISTER =================
  async register(data) {

    const existing = await userRepository.findByEmail(data.email)

    if (existing) {
      logger.error({
        message: "Email already exists",
        email: data.email
      })

      throw new Error("Email already exists")
    }

    const hashed = await PasswordUtil.hash(data.password)

    const user = await userRepository.create({
      ...data,
      password: hashed
    })

    return user
  }

  // ================= LOGIN =================
  async login(identifier, password, requireRole = null) {


    const user = await userRepository.findOne(identifier)

    if (!user) {
      logger.error({
        message: "User not found",
        identifier: identifier
      })

      throw new Error("User not found")
    }

    const valid = await PasswordUtil.compare(password, user.password)

    if (!valid) {
      logger.error({
        message: "Invalid password",
        identifier: identifier
      })

      throw new Error("Invalid password")
    }

    if(requireRole && user.role !== requireRole){
      logger.error({
        message: "User does not have required role",
        identifier: identifier,
        requiredRole: requireRole,
        userRole: user.role
      })

      throw new Error("User does not have required role")
    };


    const userId = user._id.toString()

    const accessToken = JwtUtil.generateAccessToken({
      id: userId,
      role: user.role
    })

    const refreshToken = JwtUtil.generateRefreshToken({
      id: userId
    })

    // store refresh token in Redis
    await redisClient.set(
      `refresh:${userId}`,
      refreshToken,
      {
        EX: 7 * 24 * 60 * 60
      }
    )

    return {
      user,
      accessToken,
      refreshToken
    }
  }

  // ================= REFRESH TOKEN =================
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


  // ================= GET PROFILE =================
  async getProfile(userId) {
    
    if (!userId) {
      throw new Error("User id required")
    }

    const user = await userRepository.findById(userId)

    if (!user) {
      throw new Error("User not found")
    }
    return user
  } 


  // ================= LOGOUT =================
  async logout(userId) {

    if (!userId) {
      throw new Error("User id required")
    }

    await redisClient.del(`refresh:${userId}`)

    return {
      message: "Logout successful"
    }
  }

}

export default new AuthService()