import axios from "axios";
import FormData from "form-data";
import Service from "../config/services.js";

class CloudinaryMediaService {
    constructor() {
        this.baseUrl = Service.mediaService;
        console.log(this.baseUrl);
        
    }

    async uploadImages(fileBuffer, fileName) {
        try {
            const formData = new FormData();

             formData.append("file", fileBuffer, {
                filename: fileName,
                contentType: "image/jpeg", 
            });

            const response = await axios.post(
                `${this.baseUrl}/api/upload/image`,
                formData,
                {
                    headers: {
                        ...formData.getHeaders(),
                    },
                }
            );

            return response.data;


        } catch (error) {
            console.error("Error uploading images to Cloudinary:", error);
            throw error;
        }
    }


    async uploadVideo(videoFile) {
        try {
            const formData = new FormData();
            formData.append("video", videoFile.buffer, videoFile.originalname);

            const response = await axios.post(
                `${this.baseUrl}/api/upload/video-url`,
                formData,
                {
                    headers: {
                        ...formData.getHeaders(),
                    },
                }
            );
            return response.data;

        } catch (error) {
            console.error("Error uploading video to Cloudinary:", error);
            throw error;
        }

    }
}

export default new CloudinaryMediaService();