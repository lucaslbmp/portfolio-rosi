import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: process.env.REGION_AWS,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID_AWS!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS!,
  },
});

export const uploadImageToS3 = async (
  file: Buffer,
  fileName: string,
  mimeType: string
) => {
  const bucketName = process.env.BUCKET_NAME_AWS!;
  const uniqueFileName = `${uuidv4()}-${fileName}`;

  const params = {
    Bucket: bucketName,
    Key: uniqueFileName,
    Body: file,
    ContentType: mimeType,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const url = `${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${uniqueFileName}`;
    return url;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw error;
  }
};
