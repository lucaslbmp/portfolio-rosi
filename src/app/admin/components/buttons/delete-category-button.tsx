"use client";

import OverlayPanel from "@/components/overlay-panel";
import ActionButton from "./action-button";
import { useState } from "react";
import { deleteCategoryAction } from "@/app/actions/delete-category";
import SubmitButton from "@/components/submit-button";

type DeleteCategoryButtonProps = {
  categoryId: number;
};

const DeleteCategoryButton = ({ categoryId }: DeleteCategoryButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <ActionButton
          label="Deletar"
          icon="fa-trash"
          onClick={() => setIsOpen(true)}
        />
      }
    >
      <form
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsLoading(true);
          const formData = new FormData(e.currentTarget);
          await deleteCategoryAction(formData);
          setIsLoading(false);
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h3 className="text-2xl font-bold">Deletar categoria</h3>
        <input
          type="number"
          name="categoryId"
          defaultValue={categoryId}
          className="hidden"
        />
        <span>Você deseja mesmo excluir esta categoria?</span>
        <SubmitButton pending={isLoading} className="mx-auto">
          Confirmar
        </SubmitButton>
      </form>
    </OverlayPanel>
  );
};

export default DeleteCategoryButton;
