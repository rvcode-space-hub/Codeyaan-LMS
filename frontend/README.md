import userRepository from "../repositories/user.repository.js"
import PasswordUtil from "../utils/password.js"
import JwtUtil from "../utils/jwt.js"
import logger from "../config/logger.js"

class AuthService {

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

  async login(email, password) {

    const user = await userRepository.findByEmail(email)

    if (!user) {
      logger.error({ 
        message: "User not found", 
        email 
      })
      throw new Error("User not found")
    }

    const valid = await PasswordUtil.compare(password, user.password)

    if (!valid) {
      logger.error({ 
        message: "Invalid password", 
        email 
      })
      throw new Error("Invalid password")
    }

    const accessToken = JwtUtil.generateAccessToken({
        id: user._id,
        role: user.role
      });


    const refreshToken = JwtUtil.generateRefreshToken({
        id: user._id
      });


    return { accessToken, refreshToken }
  }

  

}

export default new AuthService()