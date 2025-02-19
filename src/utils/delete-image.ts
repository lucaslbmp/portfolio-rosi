import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { extractImageKey } from "./get-image-key";

const s3 = new S3Client({
  region: process.env.REGION_AWS,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID_AWS!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS!,
  },
});

export const deleteImageFromS3 = async (url: string) => {
  const bucketName = process.env.BUCKET_NAME_AWS!;
  const imageKey = extractImageKey(url);

  const params = {
    Bucket: bucketName,
    Key: imageKey,
  };

  try {
    const command = new DeleteObjectCommand(params);
    await s3.send(command);
    console.log(`Image ${imageKey} deleted successfully from ${bucketName}`);
    return url;
  } catch (error) {
    console.error("Error deleting from S3:", error);
    throw error;
  }
};
