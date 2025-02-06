"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { updateProduct } from "@/utils/update-product";
import { revalidatePath } from "next/cache";

export async function updateProductAction(formData: FormData) {
  try {
    const id = toNumber(formData.get("product-id") as string);
    const imageFile = formData.get("imageFile") as File | undefined;
    const name = formData.get("name") as string | undefined;
    const size = formData.get("size") as string | undefined;
    const category = toNumber(formData.get("category") as string);
    const regularPrice = toNumber(formData.get("regularPrice") as string);
    const sellingPrice = toNumber(formData.get("sellingPrice") as string);
    const alternativeMethod = formData.get("alternativeMethod") as string;

    const payment = regularPrice
      ? { regularPrice, sellingPrice, alternativeMethod }
      : undefined;
    const product = { imageFile, name, size, payment };

    const _prevPayment =
      (await prisma.paymentInfo.findUnique({ where: { productId: id } })) ??
      undefined;

    const originalProduct = await prisma.product.findUnique({ where: { id } });

    if (!originalProduct) return;

    const updatedCategory = await prisma.category.update({
      include: { products: true },
      where: { id: category },
      data: {
        products: {
          update: {
            where: { id: id },
            data: {
              ...(await updateProduct(product)),
              payment: {
                update: _prevPayment?.id
                  ? {
                      where: { id: _prevPayment?.id },
                      data: { regularPrice, sellingPrice, alternativeMethod },
                    }
                  : undefined,
                create: !_prevPayment?.id ? payment : undefined,
              },
            },
          },
        },
      },
    });

    console.log("Atualizou produto com sucesso: " + product);
    revalidatePath("/products");
  } catch (error) {
    console.error("Update error:", error);
    throw new Error("Falha ao atualizar produto:" + error);
  }
}
