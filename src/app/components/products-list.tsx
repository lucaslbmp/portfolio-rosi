"use client";

import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import { categories, products } from "@/data";
import { compareSearch } from "@/utils";
import { useEffect, useState } from "react";
import CategoriesButtons from "./categories-buttons";
import PaginatedList from "./paginated-list";
import Image from "next/image";

const ProductsList = () => {
  const allCategories = "Todas as categorias";
  const pageSize = 8;
  const [search, setSearch] = useState<string>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState<string>(allCategories);
  const [categoriesList, setCategoriesList] = useState<string[]>();
  const [selectedImage, setSelectedImage] = useState<string>();

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

  const EnlargedImagePane = ({ src }: { src: string }) => (
    <div className="w-[50rem] aspect-square fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-xl overflow-hidden shadow-[0_0_6px_4px_#ffffffaa]">
      <Image src={src} alt="Imagem aumentada" fill className="object-cover" />
      <span
        className="absolute right-3 top-3 text-foregroundSecondary opacity-70 hover:opacity-100 cursor-pointer"
        onClick={() => setSelectedImage(undefined)}
      >
        <i className="fa-solid fa-xmark text-5xl" />
      </span>
    </div>
  );

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
        mapFunction={(p) => (
          <ProductCard
            key={p.name}
            {...p}
            onClick={() => setSelectedImage(p.thumbnail)}
          />
        )}
        listClassName="grid grid-cols-auto-fill-250 gap-4"
      />
      {selectedImage && <EnlargedImagePane src={selectedImage} />}
    </section>
  );
};

export default ProductsList;
