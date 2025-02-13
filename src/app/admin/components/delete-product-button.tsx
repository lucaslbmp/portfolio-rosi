"use client";

import { deleteProductAction } from "@/app/actions/delete-product";
import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import { useState } from "react";

type DeleteProductButtonProps = {
  id: number;
  name: string;
};

const DeleteProductButton = ({ id, name }: DeleteProductButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button
          title="Excluir"
          variant="danger"
          className="w-12"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-trash mx-auto" />
        </Button>
      }
    >
      <form
        // action={deleteProductAction}
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          deleteProductAction(formData);
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h4 className="text-2xl font-bold">Deletar produto</h4>
        <p>
          Deseja mesmo deletar &quot;{name}&quot;? Essa ação não pode ser
          revertida!
        </p>
        <input
          type="number"
          defaultValue={id}
          name="product-id"
          className="hidden"
          required
        />
        <Button type="submit" className="mx-auto">
          Confirmar
        </Button>
      </form>
    </OverlayPanel>
  );
};

export default DeleteProductButton;
