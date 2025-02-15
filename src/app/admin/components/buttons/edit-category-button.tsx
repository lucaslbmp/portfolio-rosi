"use client";

import OverlayPanel from "@/components/overlay-panel";
import ActionButton from "./action-button";
import InputField from "@/components/input-field";
import { useState } from "react";
import { updateCategoryAction } from "@/app/actions/update-category";
import SubmitButton from "@/components/submit-button";

type EditCategoryButtonProps = {
  categoryId: number;
  categoryName: string;
};

const EditCategoryButton = ({
  categoryName,
  categoryId,
}: EditCategoryButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <ActionButton
          label="Editar"
          icon="fa-pencil"
          onClick={() => setIsOpen(true)}
        />
      }
    >
      <form
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsLoading(true);
          const formData = new FormData(e.currentTarget);
          await updateCategoryAction(formData);
          setIsLoading(false);
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h3 className="text-2xl font-bold">Editar categoria</h3>
        <InputField
          label="Categoria"
          name="categoryName"
          defaultValue={categoryName}
        />
        <input
          type="number"
          name="categoryId"
          defaultValue={categoryId}
          className="hidden"
        />
        <SubmitButton pending={isLoading} className="mx-auto">
          Enviar
        </SubmitButton>
      </form>
    </OverlayPanel>
  );
};

export default EditCategoryButton;
