import logger from "../config/logger.js";
import authService from "../services/auth.service.js";

class AuthController {

  async register(req, resp) {
    try {
      const user = await authService.register(req.body);
      logger.info({
        message: "User registered successfully",
      });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
      resp.status(201).json({
        success: true,
        data: userData
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

  async login(req, resp) {

    try {

      const { identifier, password } = req.body;

      if (!identifier || !password) {
        return resp.status(400).json({
          success: false,
          message: "Identifier and password are required"
        })
      }

      const result = await authService.login(identifier, password);

      const userData = {
        id: result.user._id,
        identifier: result.user.identifier,
        role: result.user.role
      }

      logger.info({
        message: "User login successful",
        identifier: result.user.identifier
      });

      resp.status(200).json({
        success: true,
        data: userData,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
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

  // ================= GET PROFILE =================

  async getProfile(req, resp) {

    try {
      const userId = req.user.id;

      const user = await authService.getProfile(userId);

      if (!user) {
        return resp.status(404).json({
          success: false,
          message: "User not found"
        })
      }

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }

      logger.info({
        message: "Get profile successful",
        userId
      });

      resp.status(200).json({
        success: true,
        data: userData
      });

    } catch (error) {

      logger.error({
        message: "Get profile failed",
        error: error.message,
        stack: error.stack
      });

      resp.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async superAdminDashboard(req, res) {
    res.json({ message: "Super Admin Dashboard" });
  }

  async adminDashboard(req, res) {
    res.json({ message: "Admin Dashboard" });
  }

  async instructorDashboard(req, res) {
    res.json({ message: "Instructor Dashboard" });
  }

  async studentDashboard(req, res) {
    res.json({ message: "Student Dashboard" });
  }
}

export default new AuthController();