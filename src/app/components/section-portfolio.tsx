import ProductCard from "@/components/product-card";
import { products } from "@/data";
const SectionPortfolio = () => {
  return (
    <section className="p-16">
      <Title>Portfolio</Title>

      <div className="grid grid-cols-auto-fill-250 gap-4">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
};

export default SectionPortfolio;
