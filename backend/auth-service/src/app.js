import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { requestLogger } from "./middlewares/requestLogger.middleware.js";
import authRoutes from '../src/routes/auth.routes.js'
import cors from 'cors'
const app = express();

app.use(express.json());

app.use(cors());

// middlewares
app.use(requestLogger);
app.use(errorHandler);



// routes
app.get("/", (req, resp) => {
  resp.send("Auth Service Running 🚀");
});

app.use("/api/auth", authRoutes) 

export default app;