import dotenv from "dotenv";
dotenv.config();

const env = {
  port : process.env.PORT,

  // AWS Uploads

  // video_bucker_name:process.env.VIDEO_BUCKET_NAME,
  // image_bucket_name:process.env.IMAGE_BUCKET_NAME,
  // aws_region:process.env.AWS_REGION,
  // aws_access_key_id:process.env.AWS_ACCESS_KEY_ID,
  // aws_secret_access_key:process.env.AWS_SECRET_ACCESS_KEY,

  // Email Services

  smtp_port:process.env.SMTP_PORT,
  smtp_host:process.env.SMTP_HOST,
  smtp_user:process.env.SMTP_USER,
  smtp_password:process.env.SMTP_PASSWORD,
  contact_email:process.env.CONTACT_EMAIL,


  // Images
  cloudinary:process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_key:process.env.CLOUDINARY_API_KEY,
  cloudinary_secret:process.env.CLOUDINARY_API_SECRET
}
 

export default env;