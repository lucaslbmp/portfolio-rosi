"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { createProduct } from "@/utils/create-product";
import { revalidatePath } from "next/cache";

export async function createProductAction(formData: FormData) {
  try {
    const imageFile = formData.get("imageFile") as File;
    const name = formData.get("name") as string;
    const size = formData.get("size") as string;
    const category = toNumber(formData.get("category") as string);
    const regularPrice = toNumber(formData.get("regularPrice") as string);
    const sellingPrice = toNumber(formData.get("sellingPrice") as string);
    const alternativeMethod = formData.get("alternativeMethod") as string;

    const payment = regularPrice
      ? { regularPrice, sellingPrice, alternativeMethod }
      : undefined;
    const product = { imageFile, name, size, payment };

    await prisma.category.update({
      where: { id: category },
      data: {
        products: {
          create: {
            ...(await createProduct(product)),
            payment: { create: payment },
          },
        },
      },
    });

    console.log("Criou produto com sucesso: " + product);
    revalidatePath("/");
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Falha ao carregar categoria:" + error);
  }
}
