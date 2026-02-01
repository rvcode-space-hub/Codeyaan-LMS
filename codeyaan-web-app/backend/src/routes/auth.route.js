const express = require("express");
const { signupController, loginController } = require("../controllers/auth.controller");

const router = express.Router();

// Apply rate limiting middleware to auth routes
router.post("/signup",  signupController);
router.post("/login",   loginController);


module.exports = router;