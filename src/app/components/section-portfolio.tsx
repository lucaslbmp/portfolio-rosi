import Title from "@/components/title";
import ProductsList from "./products-list";
import prisma from "@/lib/prisma";
import { cache } from "react";

export async function generateMetadata() {
  await getCategories();
  return { title: "Home - MyApp", description: "Category List" };
}

const getCategories = cache(async () => {
  return await prisma.category.findMany({
    include: { products: { include: { payment: true } } },
  });
});

const SectionPortfolio = async () => {
  const categories = await getCategories();
  return (
    <section className="p-section" id="portfolio">
      <Title>Portfolio</Title>
      <ProductsList categories={categories} />
    </section>
  );
};

export default SectionPortfolio;

export const revalidate = 10800;
