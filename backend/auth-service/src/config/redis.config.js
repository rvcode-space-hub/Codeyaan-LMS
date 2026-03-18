import { createClient } from "redis";
import logger from "./logger.js";
import env from './env.js'

const redisClient = createClient({
    url:env.redis_url
})

redisClient.on("error", (err)=>{
    logger.error({
        message : "Redis connection failed",
        error : error.message,
        stack : error.stack
    })
        
});

export default redisClient;
