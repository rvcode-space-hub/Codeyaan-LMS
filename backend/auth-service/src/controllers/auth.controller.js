import logger from "../config/logger.js";
import authService from "../services/auth.service.js";
import JwtUtil from "../utils/jwt.js"
import env from "../config/env.js"

class AuthController {

  // ------------- Register ---------------

 async register(req, resp) {
  try {
    const { user, accessToken, refreshToken } = await authService.register(req.body);

    logger.info({
      message: "User registered successfully",
    });

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    resp.status(201).json({
      success: true,
      data: userData,
      accessToken,
      refreshToken
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

  // ----------- Login -------------------

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

  // ---------- Refresh Token -----------
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

// ------------- Oauth System --------------

 async googleCallback(req, res) {
  try {
    // ✅ Passport se aaya data
    const { user, accessToken, refreshToken } = req.user;

    const redirectURL = `${env.CLIENT_URL}/oauth-success?accessToken=${accessToken}&role=${user.role}`;

    return res.redirect(redirectURL);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


async githubCallback(req, res) {
  try {
    // ✅ Passport se aaya data
    const { user, accessToken, refreshToken } = req.user;

    const redirectURL = `${env.CLIENT_URL}/oauth-success?accessToken=${accessToken}&role=${user.role}`;

    return res.redirect(redirectURL);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


  // ------------- Logout -----------------
 async logout(req, res) {
  try {

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    await authService.logout(userId);

    logger.info({
      message: "User logout successful",
      userId
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful"
    });

  } catch (error) {

    logger.error({
      message: "Logout failed",
      error: error.message
    });

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error"
    });
  }
}

  // ---------------- Get Profile  ----------------

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