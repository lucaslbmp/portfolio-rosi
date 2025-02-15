"use client";

import { createCategoryAction } from "@/app/actions/create-category";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import OverlayPanel from "@/components/overlay-panel";
import SubmitButton from "@/components/submit-button";
import { useState } from "react";

const AddCategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsLoading(true);
          const formData = new FormData(e.currentTarget);
          await createCategoryAction(formData);
          setIsOpen(false);
          setIsLoading(false);
        }}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold">Adicionar categoria</h2>
        <InputField label="Categoria" name="categoryName" />
        <SubmitButton pending={isLoading} className="mx-auto">
          Adicionar
        </SubmitButton>
      </form>
    </OverlayPanel>
  );
};

export default AddCategoryButton;
