import mongoose from "mongoose";
import env from "./env.js";
import logger from "./logger.js";

const mongodb = async () => {
    try {
        await mongoose.connect(env.mongo_url);
        logger.info("MongoDB connected successfully ✅")

    } catch (error) {
        logger.error({
            message: "MongoDB connection failed",
            error: error.message,
            stack: error.stack
        });
        process.exit(1);
    }
};

export default mongodb;