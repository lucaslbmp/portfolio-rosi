"use server";

import { uploadImageToS3 } from "@/utils/upload-image";
import { revalidatePath } from "next/cache";

export async function createProductAction(formData: FormData) {
  try {
    const imageFile = formData.get("imageFile") as File;
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const size = formData.get("size") as string;

    const arrayBuffer = await imageFile?.arrayBuffer();
    const buffer = Buffer?.from(arrayBuffer);
    const imageUrl = await uploadImageToS3(
      buffer,
      imageFile.name,
      imageFile.type
    );

    // Create product
    await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        category,
        size,
        thumbnail: imageUrl,
      }),
    });

    revalidatePath("/products");
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Failed to upload image:" + error);
  }
}
