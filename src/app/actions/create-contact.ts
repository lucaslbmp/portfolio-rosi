"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createContactAction(formData: FormData) {
  try {
    // const name = formData.get("contact-name") as string;
    // const icon = formData.get("contact-icon") as string;
    const media = formData.get("contact-media") as string;
    const content = formData.get("contact-content") as string;
    const link = formData.get("contact-link") as string;
    const { name, icon } = JSON.parse(media);

    console.log({
      name,
      icon,
      content,
      link,
    });

    const contact = await prisma.contact.create({
      data: {
        name,
        icon,
        content,
        link,
      },
    });

    console.log("Criou contato com sucesso: " + contact);
    revalidatePath("/");
  } catch (error) {
    console.error("Create contact error:", error);
    throw new Error("Falha ao criar contato:" + error);
  }
}
