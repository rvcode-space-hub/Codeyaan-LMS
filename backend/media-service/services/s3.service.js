import { generateUploadUrl } from "../src/s3.presign.js";

export const createVideoUploadUrl = async (fileName, fileType) => {
  const uniqueFileName = `videos/${Date.now()}-${fileName}`;

  const uploadUrl = await generateUploadUrl(
    uniqueFileName,
    fileType
  );

  const fileUrl = `https://${process.env.video_bucker_name}.s3.${process.env.aws_region}.amazonaws.com/${uniqueFileName}`;

  return {
    uploadUrl,
    fileUrl,
    key: uniqueFileName,
  };
};