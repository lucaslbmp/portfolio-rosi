import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import { Contact } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import ContactForm from "./contact-form";
import AddContactButton from "./add-contact-button";
import { deleteContactAction } from "@/app/actions/delete-contact";

const SectionContacts = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <section className="mb-10 py-8 px-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-primary">Contatos</h2>
        <AddContactButton />
        <div className="flex flex-wrap gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex gap-4 bg-foregroundSecondary p-4 rounded-lg mx-2"
            >
              <i
                className={twMerge("text-4xl my-auto p-2", contact.icon)}
                title={contact.name}
              />
              <div className="flex flex-col">
                <strong>{contact.content}</strong>
                <a href={contact.link} className="text-primaryLight underline">
                  {contact.link}
                </a>
              </div>
              <div className="flex gap-2 my-auto text-base">
                {/* edit button */}
                <OverlayPanel
                  triggerButton={
                    <Button title="Editar" className=" p-2 rounded-md">
                      <i className="fa-solid fa-pencil mx-auto" />
                    </Button>
                  }
                >
                  <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6 w-[70vw] max-w-[35rem]">
                    <h2 className="text-2xl font-bold">Atualizar contato</h2>

                    <ContactForm contact={contact} />
                  </div>
                </OverlayPanel>

                {/* delete button */}
                <OverlayPanel
                  triggerButton={
                    <Button
                      variant="danger"
                      title="Editar"
                      className=" p-2 rounded-md"
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
                      Deseja mesmo deletar o contato &quot;{contact.content}
                      &quot;? Esta ação não pode ser revertida!
                    </p>
                    <input
                      type="number"
                      className="hidden"
                      defaultValue={contact.id}
                      name="contact-id"
                    />
                    <Button className="mx-auto">Confirmar</Button>
                  </form>
                </OverlayPanel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
