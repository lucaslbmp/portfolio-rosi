"use client";

import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import React, { useState } from "react";
import ProductForm from "../forms/product-form";
import { twMerge } from "tailwind-merge";

type AddProductButton = React.HTMLAttributes<HTMLButtonElement> & {
  categoryId: number;
  label?: string;
};

const AddProductButton = ({ categoryId, ...props }: AddProductButton) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button
          {...props}
          title="Adicionar produto"
          className={twMerge("mx-auto text-4xl", props.className)}
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-plus" />
          {props.label && (
            <span className="hidden md:block">{props.label}</span>
          )}
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
