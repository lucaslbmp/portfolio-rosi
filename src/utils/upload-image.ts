import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadImageToS3 = async (
  file: Buffer,
  fileName: string,
  mimeType: string
) => {
  const bucketName = process.env.AWS_BUCKET_NAME!;
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
    const url = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueFileName}`;
    return url;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw error;
  }
};
