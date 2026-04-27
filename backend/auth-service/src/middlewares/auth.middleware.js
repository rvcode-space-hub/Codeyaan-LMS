import jwt from "jsonwebtoken";
import env from "../config/env.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ❌ No header
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing"
    });
  }

  // ❌ Wrong format
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Invalid token format"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.jwt_access_secret);

    console.log("✅ DECODED:", decoded);

    // ✅ Attach user
    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();

  } catch (error) {
    console.log("❌ JWT ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: error.message === "jwt expired"
        ? "Token expired"
        : "Invalid token"
    });
  }
};

export default authMiddleware;