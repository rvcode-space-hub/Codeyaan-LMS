import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";

import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { requestLogger } from "./middlewares/requestLogger.middleware.js";

import authRoutes from "../src/routes/auth.routes.js";


// 🔥 Load passport config (IMPORTANT)
import "./config/passport.js";

const app = express();

// ================= CORE MIDDLEWARE =================
app.use(express.json());
app.use(cookieParser());

// ================= CORS =================
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);

// ================= LOGGER =================
app.use(requestLogger);

// ================= PASSPORT =================
app.use(passport.initialize()); // ❗ no session

// ================= ROUTES =================
app.get("/", (req, res) => {
  res.send("Auth Service Running 🚀");
});

app.use("/api/auth", authRoutes);

// ================= ERROR HANDLER (LAST) =================
app.use(errorHandler);

export default app;