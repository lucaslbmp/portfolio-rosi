"use client";

import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import { categories, products } from "@/data";
import { compareSearch } from "@/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface CategoriesForm {
  categories: string;
}

const ProductsList = () => {
  const allCategories = "Todas as categorias";
  const [search, setSearch] = useState<string>();
  const [currentCategory, setCurrentCategory] = useState<string>(allCategories);
  const { register, getValues } = useForm<CategoriesForm>();

  return (
    <section className="max-w-[76rem] mx-auto space-y-8">
      <SearchBar
        className="max-w-[48rem]"
        onSearch={(search) => setSearch(search)}
      />
      <form
        action=""
        onInput={() => setCurrentCategory(getValues("categories"))}
        className="flex flex-wrap justify-center gap-4"
      >
        {[allCategories, ...categories].map((category) => (
          <div key={category} className="flex">
            <input
              id={category}
              type="radio"
              className="peer hidden"
              value={category}
              {...register("categories")}
              defaultChecked={category === allCategories}
            />
            <label
              htmlFor={category}
              className={
                "text-lg p-3 border-2 rounded-lg transition-all duration-300 cursor-pointer box-border hover:text-primary hover:border-primary peer-checked:hover:text-foregroundSecondary peer-checked:bg-primaryLight peer-checked:text-foregroundSecondary peer-checked:border-primary"
              }
            >
              {category}
            </label>
          </div>
        ))}
      </form>
      <div className="grid grid-cols-auto-fill-250 gap-4">
        {products
          .filter(
            (p) =>
              currentCategory === p.category ||
              currentCategory === allCategories
          )
          .filter((p) => !search || compareSearch(search, p.name))
          .map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
