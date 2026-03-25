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




};

export default env;