import rateLimit from "express-rate-limit";

// 🔥 Global limiter
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // 100 requests per IP
  message: "Too many requests, please try again later",
});

// 🔐 Auth limiter (strict)
export const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5, // only 5 attempts
  message: "Too many login attempts, try later",
});