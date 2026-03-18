import logger from "../config/logger.js";
import authService from "../services/auth.service.js";

class AuthController {

  // ================= REGISTER =================
  async register(req, resp) {
    try {

      const user = await authService.register(req.body);

     logger.info({
      message: "User registered successfully",
      userId: user._id,
      name: user.name,
      email: user.email
    });

      resp.status(201).json({
        success: true,
        data: user
      });

    } catch (error) {

      logger.error({
        message: "User register failed",
        error: error.message,
        stack: error.stack
      });

      resp.status(500).json({
        success: false,
        message: error.message
      });
    }
  }


  // ================= LOGIN =================
  async login(req, resp) {

    try {

      const { email, password } = req.body;

      const result = await authService.login(email, password);

      logger.info({
        message: "User login successful",
        email: result.user.email
      });

      resp.status(200).json({
        success: true,
        data: result
      });

    } catch (error) {

      logger.error({
        message: "User login failed",
        error: error.message,
        stack: error.stack
      });

      resp.status(401).json({
        success: false,
        message: error.message
      });
    }
  }


  // ================= REFRESH TOKEN =================
  async refreshToken(req, resp) {

    try {

      const { refreshToken } = req.body;

      const result = await authService.refreshToken(refreshToken);

      logger.info({
        message: "Access token refreshed"
      });

      resp.status(200).json({
        success: true,
        data: result
      });

    } catch (error) {

      logger.error({
        message: "Refresh token failed",
        error: error.message
      });

      resp.status(401).json({
        success: false,
        message: error.message
      });
    }
  }


  // ================= LOGOUT =================
  async logout(req, resp) {

    try {

      const userId = req.user.id;

      const result = await authService.logout(userId);

      logger.info({
        message: "User logout successful",
        userId
      });

      resp.status(200).json({
        success: true,
        data: result
      });

    } catch (error) {

      logger.error({
        message: "Logout failed",
        error: error.message
      });

      resp.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

}

export default new AuthController();