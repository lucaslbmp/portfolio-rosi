"use server";

import prisma from "@/lib/prisma";
import { toNumber } from "@/utils";
import { revalidatePath } from "next/cache";

export async function updateContactAction(formData: FormData) {
  try {
    const id = toNumber(formData.get("contact-id") as string);
    const media = formData.get("contact-media") as string;
    const content = formData.get("contact-content") as string;
    const link = formData.get("contact-link") as string;
    const { name, icon } = JSON.parse(media);

    const category = await prisma.contact.update({
      where: { id },
      data: {
        name,
        icon,
        content,
        link,
      },
    });

    console.log("Atualizou contato com sucesso: " + category);
    revalidatePath("/admin");
  } catch (error) {
    console.error("Update contact error:", error);
    throw new Error("Falha ao atualizar contato:" + error);
  }
}
