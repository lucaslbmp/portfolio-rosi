"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { revalidatePath } from "next/cache";

export async function deleteCategoryAction(formData: FormData) {
  try {
    const id = toNumber(formData.get("categoryId") as string);

    const category = await prisma.category.delete({
      where: { id },
    });

    console.log("Deletou categoria com sucesso: " + category);
    revalidatePath("/");
  } catch (error) {
    console.error("Delete category error:", error);
    throw new Error("Falha ao deletar categoria:" + error);
  }
}
