import { ProductFormType } from "@/types";
import { uploadImageToS3 } from "./upload-image";

export const createProduct = async ({
  imageFile,
  name,
  size,
  payment,
}: ProductFormType) => {
  const arrayBuffer = await imageFile?.arrayBuffer();
  const buffer = Buffer?.from(arrayBuffer);
  const imageUrl = await uploadImageToS3(
    buffer,
    imageFile.name,
    imageFile.type
  );

  // Create product
  return {
    name,
    size,
    image: imageUrl,
    payment,
  };
};
