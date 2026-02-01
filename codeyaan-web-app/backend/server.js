const dotenv = require("dotenv");
dotenv.config(); // ✅ sabse pehle

const app = require("./app");
const connectDB = require("./src/config/mongo");
const redisClient = require("./src/config/redis");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // MongoDB
    await connectDB();

    // Redis
    if (!redisClient.isOpen) {
      await redisClient.connect();
      console.log("✅ Redis connected");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }
};

startServer();
