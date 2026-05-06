import express from "express";
import  { sendWelcomeEmail } from "../controllers/email.templates.controllers.js";

const router = express.Router();

router.post("/send-welcome", sendWelcomeEmail);

export default router;