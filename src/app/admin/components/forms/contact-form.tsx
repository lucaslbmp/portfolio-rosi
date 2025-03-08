"use client";

import InputField from "@/components/input-field";
import { Contact } from "@prisma/client";
import { createContactAction } from "@/app/actions/create-contact";
import { updateContactAction } from "@/app/actions/update-contact";
import { FormEventHandler } from "react";
import SubmitButton from "@/components/submit-button";

const stringifyValues = (name?: string, icon?: string) => {
  try {
    if (name && icon) {
      const str = JSON.stringify({ name, icon });
      return str;
    }
  } catch (error) {
    console.log("Stringify error: " + error);
    throw error;
  }
};

const ContactForm = ({
  contact,
  onSubmit,
}: {
  contact?: Contact;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) => {
  const { id, name, icon, content, link } = contact ?? {};

  const contactOptions = {
    Facebook: "fab fa-facebook",
    Instagram: "fab fa-instagram",
    Email: "fa-solid fa-envelope",
    Twitter: "fab fa-x-twitter",
    Telegram: "fa-brands fa-telegram",
    Whatsapp: "fa-brands fa-whatsapp",
    Linkedin: "fa-brands fa-linkedin",
    TikTok: "fa-brands fa-tiktok",
    Youtube: "fa-brands fa-youtube",
  };

  return (
    <form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (id) await updateContactAction(formData);
        else await createContactAction(formData);
        if (onSubmit) onSubmit(e);
      }}
      className="flex flex-col gap-4 items-center"
    >
      <div className="flex flex-col gap-2">
        <strong>Meio de contato</strong>
        <select
          className="p-2 rounded-lg"
          name="contact-media"
          defaultValue={
            contact
              ? stringifyValues(name, icon)
              : stringifyValues("Facebook", contactOptions["Facebook"])
          }
        >
          {Object.entries(contactOptions).map(([name, icon], i) => (
            <option
              key={"icon-" + i}
              value={name && icon && stringifyValues(name, icon)}
              className="flex gap-4"
            >
              {name}
            </option>
          ))}
        </select>
      </div>

      <InputField
        label="Texto exibido"
        name="contact-content"
        defaultValue={content}
        required={!id}
      />
      <InputField
        label="Link"
        name="contact-link"
        defaultValue={link}
        required={!id}
      />
      <input
        type="number"
        defaultValue={id}
        className="hidden"
        name="contact-id"
      />
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
};

export default ContactForm;
