import type { NextApiRequest, NextApiResponse } from "next";
import { uploadImageToS3 } from "@/utils/upload-image"; // Path to the utility function

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { fileName, mimeType, fileBuffer } = req.body;

    // Convert fileBuffer from base64 if necessary
    const buffer = Buffer.from(fileBuffer, "base64");

    const imageUrl = await uploadImageToS3(buffer, fileName, mimeType);

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Error in upload handler:", error);
    res.status(500).json({ message: "Error uploading image", error });
  }
}
