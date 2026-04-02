import express from 'express';
import UploadMediaController from '../controllers/upload.media.controllers.js';
import upload from '../utils/multer.js';

const router = express.Router();


router.post('/upload/image', upload.single('file'), UploadMediaController.uploadImages);
router.post('/upload/video', UploadMediaController.uploadVideo);


export default router;

