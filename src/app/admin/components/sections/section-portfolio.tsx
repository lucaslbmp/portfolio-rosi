import { Prisma } from "@prisma/client";
import AddCategoryButton from "../buttons/add-category-button";
import AddProductButton from "../buttons/add-product-button";
import CategoryHeader from "../category-header";
import ProductCardWrapper from "../product-card-wrapper";

type SectionPortfolioProps = {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: { include: { payment: true } };
    };
  }>[];
};

const SectionPortfolio = ({ categories }: SectionPortfolioProps) => {
  return (
    <section className="flex flex-col gap-4 py-8 px-4">
      <h2 className="text-4xl text-primary">Portifólio</h2>
      <AddCategoryButton />
      <div className="flex flex-col gap-4">
        {categories.map(({ id: categoryId, name: categoryName, products }) => (
          <div key={categoryId} className="flex flex-col gap-4">
            <CategoryHeader id={categoryId} name={categoryName} />

            <div className="grid grid-cols-auto-fill-250 gap-4">
              {products.map(({ id, name, image, size, payment }) => (
                <ProductCardWrapper
                  id={id}
                  key={id}
                  categoryId={categoryId}
                  name={name}
                  image={image}
                  size={size ?? undefined}
                  payment={payment ?? undefined}
                  categories={categories.map(({ id, name }) => ({
                    id,
                    name,
                  }))}
                />
              ))}
              <div className="flex justify-center items-center border-dashed border-2 rounded-lg h-[500px] w-[350px]">
                <AddProductButton categoryId={categoryId} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionPortfolio;
