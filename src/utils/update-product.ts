import { ProductUpdateFormType } from "@/types";
import { uploadImageToS3 } from "./upload-image";

export const updateProduct = async ({
  imageFile,
  name,
  size,
  payment,
}: ProductUpdateFormType) => {
  let imageUrl = undefined;
  console.log(imageFile);
  if (imageFile?.size) {
    const arrayBuffer = await imageFile?.arrayBuffer();
    const buffer = Buffer?.from(arrayBuffer);
    imageUrl = await uploadImageToS3(buffer, imageFile.name, imageFile.type);
  }

  // Create product
  return {
    name,
    size,
    image: imageUrl,
    payment,
  };
};
