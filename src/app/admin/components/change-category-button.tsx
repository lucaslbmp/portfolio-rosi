"use client";

import { shiftProductCategory } from "@/app/actions/shift-product-category";
import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import Image from "next/image";
import { useState } from "react";

type ChangeCategoryButtonProps = {
  id: number;
  name: string;
  image: string;
  categories: { id: number; name: string }[];
};

const ChangeCategoryButton = ({
  id,
  name,
  image,
  categories,
}: ChangeCategoryButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button
          title="Trocar categoria"
          variant="outline"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-rotate" />
        </Button>
      }
    >
      <form
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          shiftProductCategory(formData);
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h4 className="text-2xl font-bold">Trocar categoria do produto</h4>
        <p>
          Selecione para qual categoria você deseja enviar &quot;{name}&quot;.
        </p>
        <input
          type="number"
          defaultValue={id}
          name="product-id"
          className="hidden"
          required
        />
        <div className="flex flex-col gap-2">
          {categories?.map(({ id, name }) => (
            <div key={id} className="flex gap-2">
              <input type="radio" name="category-id" value={id} required />
              <label htmlFor={`${id}`}>{name}</label>
            </div>
          ))}
        </div>

        <div className="w-[18rem] h-[18rem] relative mx-auto">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-lg"
            objectFit="cover"
          />
        </div>
        <Button type="submit" className="mx-auto">
          Confirmar
        </Button>
      </form>
    </OverlayPanel>
  );
};

export default ChangeCategoryButton;
