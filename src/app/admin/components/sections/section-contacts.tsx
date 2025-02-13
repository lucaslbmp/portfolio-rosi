import { Contact } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import AddContactButton from "../buttons/add-contact-button";
import DeleteContactButton from "../buttons/delete-contact-button";
import EditContactButton from "../buttons/edit-contact-button";

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
                <EditContactButton contact={contact} />

                {/* delete button */}
                <DeleteContactButton
                  contactId={contact.id}
                  displayName={contact.content}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
