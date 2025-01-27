import Title from "@/components/title";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa6";
import EmailForm from "./email-form";

type ContactItemProps = {
  name: string;
  Icon: IconType;
  content: string;
  link: string;
};

const SectionContacts = () => {
  const ContactItem = ({ name, Icon, link }: ContactItemProps) => {
    return (
      <Link
        href={link}
        className="flex gap-2 items-center text-foregroundSecondary bg-primary w-fit p-3 rounded-xl hover:brightness-125"
      >
        <Icon className="text-4xl" />
      </Link>
    );
  };

  return (
    <section className="items-center p-16" id="contacts">
      <Title>Contatos</Title>
      <div className="flex flex-col gap-8 items-center">
        <span>
          Entre em contato conosco por um de nossos canais para encomendar seu
          amigurumi!
        </span>
        <div className="flex gap-[5rem] justify-center">
          <ContactItem
            name="Facebook"
            Icon={FaFacebook}
            content="Rosimeire Pinheiro de Moura"
            link="https://web.facebook.com/rosi.pinheirodemoura"
          />
          <ContactItem
            name="Instagram"
            Icon={FaInstagram}
            content="@rosipmoura"
            link="https://instagram.com/rosipmoura"
          />
          <ContactItem
            name="Email"
            Icon={FaEnvelope}
            content="rosi_pinheiro_moura@hotmail.com"
            link="mailto:rosi_pinheiro_moura@hotmail.com"
          />
        </div>
        <EmailForm className="max-w-[1200px]" />
      </div>
    </section>
  );
};

export default SectionContacts;
