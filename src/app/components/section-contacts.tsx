import Title from "@/components/title";
import Link from "next/link";
// import EmailForm from "./email-form";
import { ContactItemProps } from "@/types";

interface SectionContactsProps {
  contacts: ContactItemProps[];
}

const SectionContacts = ({ contacts }: SectionContactsProps) => {
  const ContactItem = ({ icon, link, name }: ContactItemProps) => {
    return (
      <Link
        href={link}
        className="flex gap-2 items-center text-foregroundSecondary bg-primary w-fit p-3 rounded-xl hover:brightness-125"
        target="_blank"
      >
        <i className={icon + " " + "text-4xl"} />
        <span className="hidden md:inline text-2xl">{name}</span>
      </Link>
    );
  };

  return (
    <section className="items-center p-section" id="contacts">
      <Title>Contatos</Title>
      <div className="flex flex-col gap-8 items-center">
        <span>
          Entre em contato conosco por um de nossos canais para encomendar seu
          amigurumi!
        </span>
        <div className="flex gap-[10vw] md:gap-[5rem] justify-center">
          {contacts.map((contact) => (
            <ContactItem key={contact.name} {...contact} />
          ))}
        </div>
        {/* <EmailForm className="max-w-[1200px]" /> */}
      </div>
    </section>
  );
};

export default SectionContacts;
