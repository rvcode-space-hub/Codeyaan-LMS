const redisClient = require('../config/redis')

const ROLE_LIMIT = {
  admin: 100,
  staff: 1000,
  student: 5000,
};

const WINDOW_SECONDS = 60;

const rateLimiter = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }


// Agar role object me nahi mila, system automatically 100 requests per minute allow karega.
    const role = req.user.role || "guest";
    const limit = ROLE_LIMIT[role] || 100;


    const key = `rate_limit:${req.user.id}`;

    const current = await redisClient.incr(key);

    // 👇 expire ONLY on first request
    if (current === 1) {
      await redisClient.expire(key, WINDOW_SECONDS);
    }

    if (current > limit) {
      return res.status(429).json({
        message: `Rate limit exceeded (${limit}/min)`,
      });
    }

    next();
  } catch (err) {
    console.error("Rate limiter error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = rateLimiter;
