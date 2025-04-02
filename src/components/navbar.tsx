import Link, { LinkProps } from "next/link";
import React from "react";
import BurgerMenu from "./burger-menu";

interface NavbarButtonProps extends LinkProps {
  children: React.ReactNode;
}

const NavbarButton = (props: NavbarButtonProps) => (
  <Link className="hover:text-primary" {...props}>
    {props.children}
  </Link>
);

const Navbar = () => {
  return (
    <>
      <nav className="bg-inherit font-opensans text-xl hidden md:flex md:gap-8">
        <NavbarButton href="#hero">Início</NavbarButton>
        <NavbarButton href="#portfolio">Portfolio</NavbarButton>
        <NavbarButton href="#about">Sobre</NavbarButton>
        <NavbarButton href="#contacts">Contatos</NavbarButton>
      </nav>
      <BurgerMenu
        className="md:hidden"
        menuItems={[
          { name: "Início", href: "#hero" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Sobre", href: "#about" },
          { name: "Contatos", href: "#contacts" },
        ]}
      />
    </>
  );
};

export default Navbar;
