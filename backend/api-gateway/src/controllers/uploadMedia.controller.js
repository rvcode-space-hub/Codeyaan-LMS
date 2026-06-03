import uploadMediaSerives from "../services/uploadMedia.service.js";
import logger from "../config/logger.js";

class UploadMediaController {
   static async uploadImages(req, res){
        try{
            const file = req.file
            console.log(file);
            console.log(req.file);
            
            if(!file){
                return res.status(400).json({
                    message: "No image file provided",
                });
            }
            

             const fileName = `image_${Date.now()}`;

            const result = await uploadMediaSerives.uploadImages(file.buffer, fileName);
            console.log(result);


            logger.message({
                message:"Image Upload Successfully"
            })
            res.status(200).json(result);
        }catch(error){
            console.error("Error in UploadMediaController:", error);

            logger.error({
                message : "Image Upload failed",
                error : error.message,
                stack : error.stack
            })
            res.status(500).json({
                message: "Error uploading media",
                error: error.message,
            });
        }
    }


    static async uploadVideo(req, res){
        try{
            const videoFile = req.files.find(file => file.fieldname === "video");

            if(!videoFile){
                return res.status(400).json({
                    message: "No video file provided",
                });
            }
            
            const result = await uploadMediaSerives.uploadVideo(videoFile);

            logger.info({
                message : "Video Upload Successfully"
            })
            res.status(200).json(result);
            
        }catch(error){
            console.error("Error in UploadMediaController:", error);

            logger.error({
                message: "Video Upload failed",
                error : error.message,
                stack: error.stack
            })
            res.status(500).json({
                message: "Error uploading video",
                error: error.message,
            });
        }
    }
}

export default  UploadMediaController;