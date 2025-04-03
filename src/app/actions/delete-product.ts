"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { deleteImageFromS3 } from "@/utils/delete-image";
import { revalidatePath } from "next/cache";

export async function deleteProductAction(formData: FormData) {
  try {
    const id = formData.get("product-id") as string;
    // const categoryId = formData.get("category-id") as string;

    const product = await prisma.product.findUnique({
      where: { id: toNumber(id) },
    });

    if (!product) {
      return;
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: product.id },
    });

    if (deletedProduct) {
      deleteImageFromS3(deletedProduct.image);
    }

    console.log("Deletou produto com sucesso: " + deletedProduct);
    revalidatePath("/admin");
  } catch (error) {
    console.error("Deletion error:", error);
    throw new Error("Falha ao deletar produto:" + error);
  }
}
