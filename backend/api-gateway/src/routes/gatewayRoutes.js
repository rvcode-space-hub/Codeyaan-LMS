import express from "express";
import axios from "axios";
import FormData from "form-data";
import multer from "multer";
import { SERVICES } from "../config/services.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload/images", upload.array("images"), async (req, res) => {
  try {
    const formData = new FormData();

    // ✅ images forward
    req.files.forEach((file) => {
      formData.append("images", file.buffer, file.originalname);
    });

    // ✅ videoUrl forward (text field)
    if (req.body.videoUrl) {
      formData.append("videoUrl", req.body.videoUrl);
    }

    const response = await axios.post(
      `${SERVICES.AWS_DATA_SERVICE}/api/upload/images`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "AWS DATA SERVICE ERROR",
      error: error.message,
    });
  }
});

export default router;