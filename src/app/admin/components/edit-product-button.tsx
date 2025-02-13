"use client";

import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import Image from "next/image";
import ProductForm from "./product-form";
import { useState } from "react";
import { PaymentProps } from "@/types";

type EditProductButtonProps = {
  id: number;
  name: string;
  image: string;
  size?: string;
  payment?: PaymentProps;
  categoryId: number;
};

const EditProductButton = ({
  id,
  name,
  image,
  size,
  payment,
  categoryId,
}: EditProductButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button title="Editar" className="w-12" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-pencil mx-auto" />
        </Button>
      }
    >
      <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Atualizar produto</h2>
        <div className="w-[6rem] h-[6rem] relative mx-auto">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <ProductForm
          product={{ id, name, size, image, payment }}
          category={categoryId}
          onSubmit={() => setIsOpen(false)}
        />
      </div>
    </OverlayPanel>
  );
};

export default EditProductButton;
