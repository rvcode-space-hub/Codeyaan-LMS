import jwt from "jsonwebtoken";
import env from "../config/env.js";

class JwtUtil {

  static generateAccessToken(payload) {
    return jwt.sign(
      payload,
      env.jwt_access_secret,
      {
        expiresIn: env.access_token
      }
    );
  }

  static generateRefreshToken(payload) {
    return jwt.sign(
      payload,
      env.jwt_refresh_secret,
      {
        expiresIn: env.refresh_token
      }
    );
  }

  // ✅ FIX: env use karo, process.env nahi
  static verifyAccessToken(token) {
    return jwt.verify(
      token,
      env.jwt_access_secret
    );
  }

  static verifyRefreshToken(token) {
    return jwt.verify(
      token,
      env.jwt_refresh_secret
    );
  }
}

export default JwtUtil;