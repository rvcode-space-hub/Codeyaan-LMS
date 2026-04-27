import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mediaApiRoutes from "./routes/uploadMedia.routes.js";
import { globalLimiter } from "./middlewares/rateLimit.middleware.js"
import authApiRoutes from "./routes/auth.routes.js"

const app = express();

app.use(express.json());

app.use(globalLimiter);


// API Gateway Prefix
app.use("/api", mediaApiRoutes);
app.use("/api/auth", authApiRoutes)

export default app;