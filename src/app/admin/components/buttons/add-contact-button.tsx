"use client";

import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import ContactForm from "../forms/contact-form";
import { useState } from "react";

const AddContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayPanel
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      triggerButton={
        <Button className="mx-auto my-4" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-plus text-2xl" />
          Adicionar contato
        </Button>
      }
    >
      <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Adicionar contato</h2>
        <ContactForm onSubmit={() => setIsOpen(false)} />
      </div>
    </OverlayPanel>
  );
};

export default AddContactButton;
