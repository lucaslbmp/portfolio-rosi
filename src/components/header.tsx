import React from "react";
import Navbar from "./navbar";
import { ContactItemProps } from "@/types";

const Header = ({ contacts }: { contacts: ContactItemProps[] }) => {
  return (
    <header className="flex flex-col bg-background border-b-2 border-b-border w-full sticky top-0 z-10 shadow-[0px_0px_6px_2px_#00000033]">
      <section className="flex gap-8 justify-center bg-primaryLight m-0 md:px-16 text-sm text-foregroundSecondary">
        {contacts.map(({ name, icon, content }) => (
          <div key={name} className="flex gap-2 items-center">
            <i className={icon} />
            <span>{content}</span>
          </div>
        ))}
      </section>
      <section className="flex items-center justify-between px-4 md:px-16 py-2">
        <h1 className="text-4xl font-montserrat italic  text-primary">
          Amigurumis da Rosi
        </h1>
        <Navbar />
      </section>
    </header>
  );
};

export default Header;
