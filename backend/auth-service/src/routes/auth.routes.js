import express from "express";
import passport from "passport";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";
import Roles from "../constants/roles.js";
import env from "../config/env.js"

const router = express.Router();


// Normal Auth
router.post("/v2/register", authController.register);
router.post("/v2/login", authController.login);
router.post("/v2/refresh-token", authController.refreshToken);


// ---------------- Google Oauth ---------------

// Step 1: Redirect to Google
router.get(
  "/v2/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// Step 2: Callback
router.get("/v2/google/callback", (req, res, next) => {
  console.log("CALLBACK HIT");
  console.log(req.originalUrl);
  next();
},
passport.authenticate("google", { session: false }),
async (req, res) => {
  console.log("PASSPORT SUCCESS");

  const { accessToken, user } = req.user;

  res.redirect(
    `${env.CLIENT_URL}/oauth-success?accessToken=${accessToken}&role=${user.role}`
  );
});

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