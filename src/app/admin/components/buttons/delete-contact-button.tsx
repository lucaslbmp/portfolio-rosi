"use client";

import { deleteContactAction } from "@/app/actions/delete-contact";
import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import SubmitButton from "@/components/submit-button";
import { useState } from "react";

type DeleteContactButtonProps = {
  contactId: number;
  displayName: string;
};

const DeleteContactButton = ({
  contactId,
  displayName,
}: DeleteContactButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button
          variant="danger"
          title="Editar"
          className=" p-2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-trash mx-auto" />
        </Button>
      }
    >
      <form
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsLoading(true);
          const formData = new FormData(e.currentTarget);
          await deleteContactAction(formData);
          setIsLoading(false);
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6 w-[70vw]"
      >
        <h2 className="text-2xl font-bold">Deletar contato</h2>
        <p>
          Deseja mesmo deletar o contato &quot;{displayName}
          &quot;? Esta ação não pode ser revertida!
        </p>
        <input
          type="number"
          className="hidden"
          defaultValue={contactId}
          name="contact-id"
        />
        <SubmitButton pending={isLoading} className="mx-auto">
          Confirmar
        </SubmitButton>
      </form>
    </OverlayPanel>
  );
};

export default DeleteContactButton;
