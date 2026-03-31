import express from "express";
import UploadController from "../controllers/upload.controller.js";
import { upload } from '../middlewares/image.middleware.js'

const route = express.Router();

route.post("/image", upload.single("file"), UploadController.uploadImages); // important (form-data key = file)

// Video upload (pre-signed URL)
route.post("/video-url", UploadController.getVideoUploadUrl);

export default route;
