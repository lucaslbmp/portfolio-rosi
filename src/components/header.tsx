import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="flex border-b-2 border-b-border items-center w-full justify-between px-6 py-2">
      <h1 className="text-4xl font-montserrat italic  text-primary">
        Amigurumis da Rosi
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
