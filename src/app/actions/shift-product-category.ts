"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { revalidatePath } from "next/cache";

export async function shiftProductCategory(formData: FormData) {
  try {
    const productId = toNumber(formData.get("product-id") as string);
    const categoryId = toNumber(formData.get("category-id") as string);

    const category = await prisma.product.update({
      where: { id: productId },
      data: {
        categoryId,
      },
    });

    console.log("Trocou categoria com sucesso: " + category);
    revalidatePath("/");
  } catch (error) {
    console.error("Category shift error:", error);
    throw new Error("Falha ao trocar categoria:" + error);
  }
}
