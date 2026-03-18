import app from "./src/app.js";
import mongodb from './src/config/db.config.js'
import env from './src/config/env.js'
import logger from "./src/config/logger.js";
import redisClient from "./src/config/redis.config.js";

const port = process.env.PORT || env.port;

const startServer = async () => {
  try {

    await mongodb();   // 🔥 DB connect

    if(!redisClient.isOpen){
      await redisClient.connect();
      logger.info("redis connect");
    }

    app.listen(port, () => {
      logger.info(`🚀 Server running on port ${port}`);
    });

  } catch (erorr) {
    logger.error({
      message : "Server Error",
      error : error.message,
      stack : error.stack

    })
    process.exit(1);
  }
};

startServer(); 