import { S3Client } from '@aws-sdk/client-s3'
import env  from './env.js'
console.log("AWS REGION:", env.aws_region);
const s3 = new S3Client({
  region: env.aws_region,
  
  credentials: {
    accessKeyId: env.aws_access_key_id,
    secretAccessKey: env.aws_secret_access_key,
  },

})

 

export default s3;