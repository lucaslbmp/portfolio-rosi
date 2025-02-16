import Link, { LinkProps } from "next/link";
import React from "react";
import BurgerMenu from "./burger-menu";

interface NavbarButtonProps extends LinkProps {
  children: React.ReactNode;
}

const NavbarButton = (props: NavbarButtonProps) => (
  <Link className="p-3 hover:text-primary" {...props}>
    {props.children}
  </Link>
);

const Navbar = () => {
  return (
    <>
      <nav className="bg-inherit font-opensans text-xl hidden md:block">
        <NavbarButton href="#home">Início</NavbarButton>
        <NavbarButton href="#portfolio">Portfolio</NavbarButton>
        <NavbarButton href="#about">Sobre</NavbarButton>
        <NavbarButton href="#contacts">Contatos</NavbarButton>
      </nav>
      <BurgerMenu
        menuItems={[
          { name: "Início", href: "#home" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Sobre", href: "#about" },
          { name: "Contatos", href: "#contacts" },
        ]}
      />
    </>
  );
};

export default Navbar;
