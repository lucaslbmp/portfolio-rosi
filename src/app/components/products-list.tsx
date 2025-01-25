"use client";

import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import { categories, products } from "@/data";
import { compareSearch } from "@/utils";
import { useEffect, useState } from "react";
import CategoriesButtons from "./categories-buttons";
import PaginatedList from "./paginated-list";

const ProductsList = () => {
  const allCategories = "Todas as categorias";
  const pageSize = 8;
  const [search, setSearch] = useState<string>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState<string>(allCategories);
  const [categoriesList, setCategoriesList] = useState<string[]>();

  const handleCategoryChange = (value: string) => {
    setCurrentCategory(value);
  };

  useEffect(() => {
    const _categories = [allCategories, ...categories];
    setCategoriesList(_categories);
    setCurrentCategory(_categories[0]);
  }, []);

  useEffect(() => {
    const filtered = products
      .filter(
        (p) =>
          currentCategory === p.category || currentCategory === allCategories
      )
      .filter((p) => !search || compareSearch(search, p.name));
    setFilteredProducts(filtered);
  }, [currentCategory, search]);

  return (
    <section className="max-w-[76rem] mx-auto space-y-8">
      <SearchBar
        className="max-w-[48rem]"
        onSearch={(search) => setSearch(search)}
      />
      <CategoriesButtons
        categoriesList={categoriesList}
        defaultCategory={allCategories}
        handleCategoryChange={handleCategoryChange}
      />
      <PaginatedList
        list={filteredProducts}
        pageSize={pageSize}
        mapFunction={(p) => <ProductCard key={p.name} {...p} />}
        listClassName="grid grid-cols-auto-fill-250 gap-4"
      />
    </section>
  );
};

export default ProductsList;
