import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mediaApiRoutes from "./routes/uploadMedia.routes.js";

const app = express();

app.use(express.json());


// API Gateway Prefix
app.use("/api", mediaApiRoutes);

export default app;