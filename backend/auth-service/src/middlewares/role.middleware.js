const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {

    // ✅ safety check
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "Unauthorized: No user data"
      })
    }

    // ✅ role check
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden: Access denied"
      })
    }

    next()
  }
}

export default roleMiddleware