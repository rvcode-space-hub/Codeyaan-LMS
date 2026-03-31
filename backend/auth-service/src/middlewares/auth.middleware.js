import JwtUtil from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing"
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token missing"
    });
  }
  try {
    const decoded = JwtUtil.verifyAccessToken(token);

    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });

  }

};

export default authMiddleware;