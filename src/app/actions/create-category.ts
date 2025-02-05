"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategoryAction(formData: FormData) {
  try {
    const name = formData.get("categoryName") as string;

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    console.log("Criou categoria com sucesso: " + category);
    revalidatePath("/");
  } catch (error) {
    console.error("Create category error:", error);
    throw new Error("Falha ao criar categoria:" + error);
  }
}
