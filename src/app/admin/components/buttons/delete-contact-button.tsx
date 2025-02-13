"use client";

import { deleteContactAction } from "@/app/actions/delete-contact";
import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
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
        action={deleteContactAction}
        className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6 w-[70vw] max-w-[35rem]"
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
        <Button className="mx-auto">Confirmar</Button>
      </form>
    </OverlayPanel>
  );
};

export default DeleteContactButton;
