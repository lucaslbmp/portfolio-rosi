"use server";

import InputField from "@/components/input-field";
import Button from "@/components/button";
import { Contact } from "@prisma/client";
import { createContactAction } from "@/app/actions/create-contact";
import { updateContactAction } from "@/app/actions/update-contact";

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

const ContactForm = ({ contact }: { contact?: Contact }) => {
  const { id, name, icon, content, link } = contact ?? {};
  console.log("contact ---> ", content, icon);

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

  console.log(JSON.parse(`{"name": "${name}","icon": "${icon}"}`));
  return (
    <form
      action={id ? updateContactAction : createContactAction}
      className="flex flex-col gap-4 items-center"
    >
      {/* <InputField
        label="Meio de contato"
        name="contact-name"
        defaultValue={name}
        required={!id}
      />
      <InputField
        label="Ícone"
        name="contact-icon"
        defaultValue={icon}
        required={!id}
      /> */}
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
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default ContactForm;
