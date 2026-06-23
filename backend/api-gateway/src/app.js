import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mediaApiRoutes from "./routes/uploadMedia.routes.js";
import { globalLimiter } from "./middlewares/rateLimit.middleware.js"
import authApiRoutes from "./routes/auth.routes.js"
import cors from "cors"

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);

app.use(globalLimiter);


// API Gateway Prefix
app.use("/api", mediaApiRoutes);
app.use("/api/auth", authApiRoutes)

export default app;