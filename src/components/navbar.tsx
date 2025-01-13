import Link, { LinkProps } from "next/link";
import React from "react";

interface NavbarButtonProps extends LinkProps {
  children: React.ReactNode;
}

const NavbarButton = (props: NavbarButtonProps) => (
  <Link className="p-3 text-foregroundSecondary hover:text-primary" {...props}>
    {props.children}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="bg-background font-opensans text-xl ">
      <NavbarButton href="#home">Início</NavbarButton>
      <NavbarButton href="#portfolio">Portfolio</NavbarButton>
      <NavbarButton href="#about">Sobre</NavbarButton>
      <NavbarButton href="#contacts">Contatos</NavbarButton>
    </nav>
  );
};

export default Navbar;
