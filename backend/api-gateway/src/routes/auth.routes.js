import express from "express";
import { authLimiter } from "../middlewares/rateLimit.middleware.js";
import AuthGatewayController from "../controllers/auth.controller.js";
import roleMiddleware from "../middlewares/role.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import Roles from "../utils/roles.js";

const routes = express.Router();

// ----------- Auth Routes -----------

routes.post("/v2/register", authLimiter, AuthGatewayController.register);
routes.post("/v2/login", authLimiter, AuthGatewayController.login);

// ----------- Role Based -----------

// Super Admin
routes.get(
  "/super-admin/dashboard",
  authMiddleware,
  roleMiddleware(Roles.SUPER_ADMIN),
  AuthGatewayController.superAdminDashboard
);

// Admin
routes.get(
  "/admin/dashboard",
  authMiddleware,
  roleMiddleware(Roles.ADMIN),
  AuthGatewayController.adminDashboard
);

// Instructor
routes.get(
  "/instructor/dashboard",
  authMiddleware,
  roleMiddleware(Roles.INSTRUCTOR),
  AuthGatewayController.instructorDashboard
);

// Student
routes.get(
  "/student/dashboard",
  authMiddleware,
  roleMiddleware(Roles.STUDENT),
  AuthGatewayController.studentDashboard
);

export default routes;