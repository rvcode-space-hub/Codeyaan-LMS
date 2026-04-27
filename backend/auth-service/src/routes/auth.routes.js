import express from "express";
import passport from "passport";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";
import Roles from "../constants/roles.js";
import env from "../config/env.js"

const router = express.Router();


// Normal Auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);


// ---------------- Google Oauth ---------------

// Step 1: Redirect to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// Step 2: Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {

    const { accessToken, refreshToken, user } = req.user;

    // ✅ send via redirect (query params)
    res.redirect(
      `${env.CLIENT_URL}/oauth-success?accessToken=${accessToken}&role=${user.role}`
    );
  }
);

// ---------------- Github Oauth ---------------

// Step 1
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
    session: false,
  })
);

// Step 2
router.get(
  "/github/callback",
  passport.authenticate("github", { session: false }),
  (req, res) => {
    const { accessToken, user } = req.user;

    res.redirect(
      `${env.CLIENT_URL}/oauth-success?accessToken=${accessToken}&role=${user.role}`
    );
  }
);


// ------------- Logout ----------------
router.post(
  "/logout",
  authMiddleware,
  authController.logout
);


// ------- USER -------------
router.get(
  "/profile",
  authMiddleware,
  authController.getProfile
);


// ----------- Role Based ---------

// Super Admin
router.get(
  "/super-admin/dashboard",
  authMiddleware,
  roleMiddleware(Roles.SUPER_ADMIN),
  authController.superAdminDashboard
);

// Admin
router.get(
  "/admin/dashboard",
  authMiddleware,
  roleMiddleware(Roles.ADMIN),
  authController.adminDashboard
);

// Instructor
router.get(
  "/instructor/dashboard",
  authMiddleware,
  roleMiddleware(Roles.INSTRUCTOR),
  authController.instructorDashboard
);

// Student
router.get(
  "/student/dashboard",
  authMiddleware,
  roleMiddleware(Roles.STUDENT),
  authController.studentDashboard
);

export default router;