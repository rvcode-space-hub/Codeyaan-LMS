const express = require("express");
const authRoutes = require("./src/routes/auth.route");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// Apis routes

app.use("/api/auth", authRoutes);



module.exports = app;
