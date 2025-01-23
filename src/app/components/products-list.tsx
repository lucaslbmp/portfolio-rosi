"use client";

import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import TabsContainer from "@/components/tabs-container";
import { categories, products } from "@/data";
import { TabProps } from "@/types";
import { compareSearch } from "@/utils";
import { useState } from "react";

const ProductsList = () => {
  const [search, setSearch] = useState<string>();

  const allTab: TabProps = {
    label: "Todas as categorias",
    pane: (
      <div className="grid grid-cols-auto-fill-250 gap-4">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    ),
  };
  const tabs: TabProps[] = [
    allTab,
    ...categories.map((cat) => ({
      label: cat,
      pane: (
        <div className="grid grid-cols-auto-fill-250 gap-4">
          {products
            .filter((p) => p.category === cat)
            .filter((p) => !search || compareSearch(search, p.name))
            .map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
        </div>
      ),
    })),
  ];

  return (
    <section className="max-w-[76rem] mx-auto">
      <SearchBar
        className="max-w-[48rem]"
        onSearch={(search) => setSearch(search)}
      />
      <TabsContainer tabs={tabs} />
    </section>
  );
};

export default ProductsList;
