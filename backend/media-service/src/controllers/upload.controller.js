import CloudinaryService from "../services/cloudinary.service.js";
import S3Service from "../services/aws.s3.presign.service.js";

class UploadController {
  static async uploadImages(req, res) {
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
      
      const fileName = `image_${Date.now()}`;
      
      const result = await CloudinaryService.uploadImage(
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
  }

  static async getVideoUploadUrl(req, res) {
    try {
      const { fileName, fileType } = req.body;

      if (!fileName || !fileType) {
        return res.status(400).json({
          success: false,
          message: "fileName and fileType are required",
        });
      }

      const data = await S3Service.createVideoUploadUrl(
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
  }
}

export default UploadController;
