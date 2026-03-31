import cloudinary from "../config/cloudinary.config.js";
class CloudinaryService {
  static async uploadImage(buffer, fileName) {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "CodeYaan/images",    // Cloudinary Folder name
            resource_type: "image",
            public_id: fileName,
            use_filename: true,
            unique_filename: true,
            transformation: [      // resize image
              { width: 800, height: 800, crop: "limit" },
              { quality: "auto" },
              { fetch_format: "auto" },
            ],
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
  
        stream.end(buffer);
      });
  }

  static async deleteImage(publicId) {
    try {
      const result = await cloudinary.uploader.destroy(publicId, {
        resource_type: "image",
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
 
export default CloudinaryService;