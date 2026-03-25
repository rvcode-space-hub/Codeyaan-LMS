import { uploadImageToCloudinary } from "../services/cloudinary.service.js";
import { createVideoUploadUrl } from "../services/s3.service.js";

// 🖼 IMAGE UPLOAD
export const uploadImages = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }

    if (!file.mimetype.startsWith("image/")) {
      return res.status(400).json({
        error: "Only image files are allowed",
      });
    }

    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return res.status(400).json({
        error: "Image size must be less than 5MB",
      });
    }

    const fileName = `image_${Date.now()}`;

    const result = await uploadImageToCloudinary(
      file.buffer,
      fileName
    );

    return res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: result.secure_url,
      public_id: result.public_id,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({
      error: "Upload failed",
    });
  }
};


// 🎥 VIDEO UPLOAD (S3 Presigned URL)
export const getVideoUploadUrl = async (req, res) => {
  try {
    const { fileName, fileType } = req.body;

    if (!fileName || !fileType) {
      return res.status(400).json({
        success: false,
        message: "fileName and fileType are required",
      });
    }

    const data = await createVideoUploadUrl(
      fileName,
      fileType
    );

    return res.status(200).json({
      success: true,
      message: "Pre-signed URL generated",
      data,
    });

  } catch (error) {
    console.error("Video URL Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate upload URL",
    });
  }
};