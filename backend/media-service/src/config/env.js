import dotenv from "dotenv";
dotenv.config();

const env = {
  port : process.env.PORT,
  video_bucker_name:process.env.VIDEO_BUCKET_NAME,
  // image_bucket_name:process.env.IMAGE_BUCKET_NAME,
  aws_region:process.env.AWS_REGION,
  aws_access_key_id:process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key:process.env.AWS_SECRET_ACCESS_KEY,
  cloudinary:process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_key:process.env.CLOUDINARY_API_KEY,
  cloudinary_secret:process.env.CLOUDINARY_API_SECRET
}
 

export default env;