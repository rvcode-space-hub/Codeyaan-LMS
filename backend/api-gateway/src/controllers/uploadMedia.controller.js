import uploadMediaSerives from "../services/uploadMedia.service.js";

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

            res.status(200).json(result);
        }catch(error){
            console.error("Error in UploadMediaController:", error);
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
            res.status(200).json(result);
            
        }catch(error){
            console.error("Error in UploadMediaController:", error);
            res.status(500).json({
                message: "Error uploading video",
                error: error.message,
            });
        }
    }
}

export default  UploadMediaController;