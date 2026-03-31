import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3 from "./aws.s3.config.js";
import  env  from './env.js'

export const generateUploadUrl = async (fileName, fileType) => {
  const command = new PutObjectCommand({
    Bucket:env.video_bucker_name,
    Key: fileName,
    ContentType: fileType,
  });
  const url = await getSignedUrl(s3, command, { expiresIn: 300 });
  return url;
};