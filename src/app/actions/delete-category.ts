"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { deleteImageFromS3 } from "@/utils/delete-image";
import { revalidatePath } from "next/cache";

export async function deleteCategoryAction(formData: FormData) {
  try {
    const id = toNumber(formData.get("categoryId") as string);

    const images = (
      await prisma.product.findMany({ where: { categoryId: id } })
    ).map(({ image }) => image);
    const [, category] = await prisma.$transaction([
      prisma.product.deleteMany({ where: { id } }),
      prisma.category.delete({
        where: { id },
      }),
    ]);

    images.forEach((image) => deleteImageFromS3(image));

    console.log("Deletou categoria com sucesso: " + category);
    revalidatePath("/");
  } catch (error) {
    console.error("Delete category error:", error);
    throw new Error("Falha ao deletar categoria:" + error);
  }
}
