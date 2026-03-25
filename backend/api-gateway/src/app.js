import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import gatewayRoutes from "./routes/gatewayRoutes.js";

const app = express();

app.use(express.json());

// API Gateway Prefix
app.use("/api", gatewayRoutes);

export default app;