"use client";

import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import { useState } from "react";
import ProductForm from "./product-form";

type AddProductButton = {
  categoryId: number;
};

const AddProductButton = ({ categoryId }: AddProductButton) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button
          title="Adicionar produto"
          className="mx-auto"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-plus text-4xl" />
        </Button>
      }
    >
      <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
        <h3 className="text-2xl font-bold">Adicionar produto</h3>
        <ProductForm category={categoryId} onSubmit={() => setIsOpen(false)} />
      </div>
    </OverlayPanel>
  );
};

export default AddProductButton;
