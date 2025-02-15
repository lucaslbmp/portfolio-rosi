"use client";

import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import ContactForm from "../forms/contact-form";
import { useState } from "react";
import { Contact } from "@prisma/client";

type EditContactButtonProps = {
  contact: Contact;
};

const EditContactButton = ({ contact }: EditContactButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button
          title="Editar"
          className=" p-2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-pencil mx-auto" />
        </Button>
      }
    >
      <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Atualizar contato</h2>

        <ContactForm contact={contact} onSubmit={() => setIsOpen(false)} />
      </div>
    </OverlayPanel>
  );
};

export default EditContactButton;
