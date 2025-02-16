import Title from "@/components/title";
import ProductsList from "./products-list";
import prisma from "@/lib/prisma";

const SectionPortfolio = async () => {
  const categories = await prisma.category.findMany({
    include: { products: { include: { payment: true } } },
  });
  return (
    <section className="p-section" id="portfolio">
      <Title>Portfolio</Title>
      <ProductsList categories={categories} />
    </section>
  );
};

export default SectionPortfolio;
