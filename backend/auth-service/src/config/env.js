import dotenv from "dotenv";

dotenv.config();

const env = {
  port: process.env.PORT || 5000,
  mongo_url: process.env.MONGO_URL,
  redis_url:process.env.REDIS_URL,
  jwt_access_secret:process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret:process.env.JWT_REFRESH_SECRET,
  access_token:process.env.ACCESS_TOKEN_EXPIRY,
  refresh_token: process.env.REFRESH_TOKEN_EXPIRY,

  // Seed Admin Credentials
  seed_admin_email: process.env.SEED_ADMIN_EMAIL,
  seed_admin_password: process.env.SEED_ADMIN_PASSWORD,

  // OAuth.js 
  google_id:process.env.GOOGLE_CLIENT_ID,
  google_secret_id:process.env.GOOGLE_CLIENT_SECRET,

  CLIENT_URL:process.env.CLIENT_URL,

  github_id:process.env.GITHUB_CLIENT_ID,
  github_secret_id:process.env.GITHUB_CLIENT_SECRET,

};

export default env;