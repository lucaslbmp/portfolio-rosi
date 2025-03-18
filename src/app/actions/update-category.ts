"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { revalidatePath } from "next/cache";

export async function updateCategoryAction(formData: FormData) {
  try {
    const id = toNumber(formData.get("categoryId") as string);
    const name = formData.get("categoryName") as string;

    const category = await prisma.category.update({
      where: { id },
      data: {
        name,
      },
    });

    console.log("Atualizou categoria com sucesso: " + category);
    revalidatePath("/admin");
  } catch (error) {
    console.error("Update category error:", error);
    throw new Error("Falha ao atualizar categoria:" + error);
  }
}
