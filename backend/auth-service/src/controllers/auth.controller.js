import logger from "../config/logger.js";
import authService from "../services/auth.service.js";
import JwtUtil from "../utils/jwt.js"
import env from "../config/env.js"
import Service from "../config/service.js";
import axios from 'axios'
import crypto from "node:crypto";

class AuthController {

  // ------------- Register -------------

async register(req, res) {
  try {

    const meta = {
      ipAddress: req.ip,
      browser: req.headers["user-agent"] || null,
      os: null,
      deviceName: null,
      deviceId: req.headers["x-device-id"] || crypto.randomUUID(),
    };

    const {
      user,
      accessToken,
      refreshToken,
    } = await authService.register(req.body, meta);

    // Welcome Email
    try {
      await axios.post(
        `${Service.mediaService}/api/email/send-welcome`,
        {
          email: user.email,
          name: user.name,
        }
      );
    } catch (emailError) {
      console.log(
        "⚠️ Email failed but user created:",
        emailError.response?.data || emailError.message
      );
    }

    logger.info({
      message: "User registered successfully",
    });

    const userData = {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    return res.status(201).json({
      success: true,
      data: userData,
      accessToken,
      refreshToken,
    });

  } catch (error) {

    logger.error({
      message: "User register failed",
      error: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
}

  // ----------- Login -------------------

 async login(req, res) {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: "Identifier and password are required",
      });
    }

    // Device Metadata
    const meta = {
      ipAddress: req.ip || req.headers["x-forwarded-for"] || null,
      browser: req.useragent?.browser || null,
      os: req.useragent?.os || null,
      deviceName: req.useragent?.platform || null,
      deviceId: req.headers["x-device-id"] || null,
    };

    const result = await authService.login(
      identifier,
      password,
      meta
    );

    const userData = {
      id: result.user._id,
      identifier: result.user.identifier,
      role: result.user.role,
    };

    logger.info({
      message: "User login successful",
      userId: result.user._id,
      identifier: result.user.identifier,
      ipAddress: meta.ipAddress,
    });

    return res.status(200).json({
      success: true,
      data: userData,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      timings: result.timings, // Development me useful
    });
  } catch (error) {
    logger.error({
      message: "User login failed",
      error: error.message,
      stack: error.stack,
    });

    return res.status(401).json({
      success: false,
      message: error.message,
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
    const { user, accessToken, refreshToken } = req.user;

    logger.info({
      message: "Google login successful",
      userId: user._id,
      identifier: user.identifier,
      provider: "google",
    });

    const redirectURL =
      `${env.CLIENT_URL}/oauth-success` +
      `?accessToken=${encodeURIComponent(accessToken)}` +
      `&refreshToken=${encodeURIComponent(refreshToken)}` +
      `&role=${encodeURIComponent(user.role)}`;

    return res.redirect(redirectURL);

  } catch (error) {

    logger.error({
      message: "Google login failed",
      error: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async githubCallback(req, res) {
  try {
    const { user, accessToken, refreshToken } = req.user;

    logger.info({
      message: "GitHub login successful",
      userId: user._id,
      identifier: user.identifier,
      provider: "github",
    });

    const redirectURL =
      `${env.CLIENT_URL}/oauth-success` +
      `?accessToken=${encodeURIComponent(accessToken)}` +
      `&refreshToken=${encodeURIComponent(refreshToken)}` +
      `&role=${encodeURIComponent(user.role)}`;

    return res.redirect(redirectURL);

  } catch (error) {

    logger.error({
      message: "GitHub login failed",
      error: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


  // ------------- Logout -----------------
async logout(req, res) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const meta = {
      deviceId: req.headers["x-device-id"] || null,
      ipAddress: req.ip || req.headers["x-forwarded-for"] || null,
    };

    await authService.logout(userId, meta);

    logger.info({
      message: "User logout successful",
      userId,
      deviceId: meta.deviceId,
      ipAddress: meta.ipAddress,
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });

  } catch (error) {

    logger.error({
      message: "Logout failed",
      userId: req.user?.id,
      error: error.message,
      stack: error.stack,
    });

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
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