import express from "express";
import { uploadImages, getVideoUploadUrl } from "../controllers/upload.controller.js";
import { upload } from '../middlewares/image.middleware.js'

const router = express.Router();

router.post("/image", upload.single("file"), uploadImages); // important (form-data key = file)

// Video upload (pre-signed URL)
router.post("/video-url", getVideoUploadUrl);

export default router;