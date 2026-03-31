import express from "express"
import authController from "../controllers/auth.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"
import roleMiddleware from "../middlewares/role.middleware.js"
import  Roles  from "../constants/roles.js"

const router = express.Router()

// ================= PUBLIC ROUTES =================
router.post("/register", authController.register)
router.post("/login", authController.login)
router.post("/refresh-token", authController.refreshToken)

// logout (any logged-in user)
router.post(
  "/logout",
  authMiddleware,
  authController.logout
)

router.get("/profile",authMiddleware,authController.getProfile)

// super admin only
router.get(
    "/super-admin/dashboard",
    authMiddleware,
    roleMiddleware(Roles.SUPER_ADMIN),
    authController.superAdminDashboard
  )

// Admin only
router.get(
  "/admin/dashboard",
  authMiddleware,
  roleMiddleware(Roles.ADMIN),
  authController.adminDashboard
)

// Instructor only
router.get(
  "/instructor/dashboard",
  authMiddleware,
  roleMiddleware(Roles.INSTRUCTOR),
  authController.instructorDashboard
)

// Student only
router.get(
  "/student/dashboard",
  authMiddleware,
  roleMiddleware(Roles.STUDENT),
  authController.studentDashboard
)

export default router