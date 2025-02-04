"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { revalidatePath } from "next/cache";

export async function deleteProductAction(formData: FormData) {
  try {
    const id = formData.get("product-id") as string;

    if (!id) return;

    const product = await prisma.product.delete({
      where: { id: toNumber(id) },
    });

    console.log("Deletou produto com sucesso: " + product);
    revalidatePath("/products");
  } catch (error) {
    console.error("Deletion error:", error);
    throw new Error("Falha ao deletar produto:" + error);
  }
}
