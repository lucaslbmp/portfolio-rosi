"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
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

    await prisma.product.delete({
      where: { id: product.id },
    });

    console.log("Deletou produto com sucesso: " + product);
    revalidatePath("/products");
  } catch (error) {
    console.error("Deletion error:", error);
    throw new Error("Falha ao deletar produto:" + error);
  }
}
