import { createClient } from "redis";
import logger from "./logger.js";
import env from './env.js'
import {performance } from "node:perf_hooks"

const start = performance.now();

const redisClient = createClient({
    url:env.redis_url
})
console.log("Redis:", performance.now() - start);


redisClient.on("error", (error)=>{
    logger.error({
        message : "Redis connection failed",
        error : error.message,
        stack : error.stack
    })
        
});

export default redisClient;
