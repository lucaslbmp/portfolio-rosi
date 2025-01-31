import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, size, category, thumbnail } = await req.json();

    const product = await prisma.product.create({
      data: {
        name,
        size,
        category,
        thumbnail,
      },
    });

    return new Response(`Produto criado: ${product}`, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response("Erro ao criar produto", { status: 500 });
  }
}
