import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/upload.routes.js";


dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
//Health Check
app.get("/", (req, res) => {
  res.send("AWS Media Service Running 🚀");
});


app.use("/api/upload", route);



// Error 
app.use((err, req, res, next) => {
  console.error("Global Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;