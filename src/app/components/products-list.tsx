"use client";

import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import { categories, products } from "@/data";
import { ProductCardProps } from "@/types";
import { compareSearch, paginate as paginate } from "@/utils";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CategoriesButtons from "./categories-buttons";

type ArrowType = "page" | "prev" | "next" | "jump-prev" | "jump-next";

const ProductsList = () => {
  const allCategories = "Todas as categorias";
  const pageSize = 8;
  const [search, setSearch] = useState<string>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currPage, setCurrPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState<string>(allCategories);
  const [categoriesList, setCategoriesList] = useState<string[]>();
  // const { register, getValues } = useForm<CategoriesForm>();

  const updatePage = (page: number) => {
    setCurrPage(page);
  };

  const handleCategoryChange = (value: string) => {
    setCurrentCategory(value);
    setCurrPage(1);
  };

  const prevNextArrow = (
    current: number,
    type: ArrowType,
    originalElement: React.ReactNode
  ) => (
    <button>
      {type === "prev" ? (
        <FaAngleLeft />
      ) : type === "next" ? (
        <FaAngleRight />
      ) : (
        originalElement
      )}
    </button>
  );

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
    console.log(filtered);
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
      <div className="grid grid-cols-auto-fill-250 gap-4">
        {paginate<ProductCardProps>(filteredProducts, pageSize, currPage).map(
          (p) => (
            <ProductCard key={p.name} {...p} />
          )
        )}
      </div>
      <Pagination
        className="flex gap-4 justify-center [&_li]:flex [&_button]:justify-center [&_button]:flex [&_button]:items-center [&_button]:border-2 [&_button]:w-8 [&_button]:h-8 [&_button]:rounded-md hover:[&_button]:border-primary [&_li[class$=active]_button]:bg-primaryLight [&_li[class$=active]_button]:text-foregroundSecondary"
        pageSize={pageSize}
        onChange={updatePage}
        current={currPage}
        total={filteredProducts.length}
        showSizeChanger={true}
        itemRender={prevNextArrow}
      />
    </section>
  );
};

export default ProductsList;
