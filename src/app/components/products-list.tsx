"use client";

import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import { compareSearch } from "@/utils";
import { useState } from "react";
import CategoriesButtons from "./categories-buttons";
import PaginatedList from "./paginated-list";
import Image from "next/image";
import { Prisma } from "@prisma/client";

type PrismaCategory = Prisma.CategoryGetPayload<{
  include: { products: { include: { payment: true } } };
}>;

type PrismaProduct = Prisma.ProductGetPayload<{ include: { payment: true } }>;

const ProductsList = ({ categories }: { categories: PrismaCategory[] }) => {
  const pageSize = 8;
  const categoriesList = [
    { id: 0, name: "Todas as categorias" },
    ...categories.map(({ id, name }) => ({ id, name })),
  ];
  const [search, setSearch] = useState<string>();
  const [currentCategory, setCurrentCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>();

  const handleCategoryChange = (value: string) => {
    setCurrentCategory(+value);
  };

  const getCurrCategoryProducts = () => {
    return currentCategory
      ? categories.filter(({ id }) => id === currentCategory)[0].products
      : categories.reduce(
          (list, cat) => [...list, ...cat.products],
          new Array<PrismaProduct>()
        );
  };

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
        defaultCategory={0}
        handleCategoryChange={handleCategoryChange}
      />
      <PaginatedList
        list={
          getCurrCategoryProducts()?.filter(
            (p) => !search || compareSearch(search, p.name)
          ) ?? []
        }
        pageSize={pageSize}
        mapFunction={(p) => (
          <ProductCard
            key={p.name}
            {...p}
            onClick={() => setSelectedImage(p.image)}
          />
        )}
        listClassName="grid grid-cols-auto-fill-250 gap-4"
      />
      {selectedImage && <EnlargedImagePane src={selectedImage} />}
    </section>
  );
};

export default ProductsList;
