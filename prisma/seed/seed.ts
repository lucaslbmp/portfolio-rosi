import { PrismaClient } from "@prisma/client";
import { categories } from "./categories.mjs";
import { contacts } from "./contacts.mjs";
import { uploadImageToS3 } from "@/utils/upload-image";
import { existsSync, readFileSync } from "fs";
import path from "path";

const prisma = new PrismaClient();

const IMAGE_BASE_PATH = "/public/products-images/";

function generateImageUrl(relativePath: string) {
  const fullPath = path.join(process.cwd(), IMAGE_BASE_PATH, relativePath);
  if (!existsSync(fullPath)) {
    console.warn(`⚠️ Image not found: ${fullPath}`);
    return "";
  }
  const bitmap = readFileSync(fullPath);
  return uploadImageToS3(bitmap, relativePath.replace(".jpg", ""), "image/jpg");
}

async function seed() {
  for (const categoryData of categories) {
    const category = await prisma.category.create({
      data: {
        name: categoryData.name,
        products: {
          create: await Promise.all(
            categoryData.products.map(async (product) => ({
              name: product.name,
              size: product.size,
              image: await generateImageUrl(product.image),
            }))
          ),
        },
      },
    });
    console.log(`Created category: ${category.name}`);
  }

  for (const contactData of contacts) {
    const { name, icon, content, link } = contactData;
    const contact = await prisma.contact.create({
      data: { name, icon, content, link },
    });
    console.log(`Created contact: ${contact.name}`);
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
