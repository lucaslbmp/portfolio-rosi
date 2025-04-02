import React from "react";
import Navbar from "./navbar";
import { ContactItemProps } from "@/types";
import HeaderBody from "./header-body";
import Image from "next/image";

const Header = ({ contacts }: { contacts: ContactItemProps[] }) => {
  return (
    <header className="flex flex-col bg-background max-w-full sticky top-0 z-10">
      <section className="hidden md:flex gap-8 justify-center bg-primaryLight m-0 md:px-16 text-sm text-foregroundSecondary">
        {contacts.map(({ name, icon, content }) => (
          <div key={name} className="flex gap-2 items-center">
            <i className={icon} />
            <span>{content}</span>
          </div>
        ))}
      </section>
      <HeaderBody>
        <div className="h-[90px] w-[240px] relative">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="mx-auto bg-center object-cover "
          />
        </div>

        <Navbar />
      </HeaderBody>
    </header>
  );
};

export default Header;
