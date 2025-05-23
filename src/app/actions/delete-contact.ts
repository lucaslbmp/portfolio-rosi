"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { revalidatePath } from "next/cache";

export async function deleteContactAction(formData: FormData) {
  try {
    const id = toNumber(formData.get("contact-id") as string);

    const category = await prisma.contact.delete({
      where: { id },
    });

    revalidatePath("/admin");

    console.log("Deletou contato com sucesso: " + category);
  } catch (error) {
    console.error("Delete contact error:", error);
    throw new Error("Falha ao deletar contato:" + error);
  }
}
