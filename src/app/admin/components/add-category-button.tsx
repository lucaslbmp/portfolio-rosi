"use client";

import { createCategoryAction } from "@/app/actions/create-category";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import OverlayPanel from "@/components/overlay-panel";
import { useState } from "react";

const AddCategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button className="mx-auto my-4" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-plus text-2xl" />
          Adicionar categoria
        </Button>
      }
    >
      <form
        // action={createCategoryAction}
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          const formData = new FormData(e.currentTarget);
          createCategoryAction(formData);
          setIsOpen(false);
        }}
        className="px-4 w-[25rem] py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold">Adicionar categoria</h2>
        <InputField label="Categoria" name="categoryName" />
        <Button
          type="submit"
          className="mx-auto"
          // onClick={() => setIsOpen(false)}
        >
          Adicionar
        </Button>
      </form>
    </OverlayPanel>
  );
};

export default AddCategoryButton;
