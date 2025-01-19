import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="flex bg-background border-b-2 border-b-border items-center w-full justify-between px-6 py-2 sticky top-0 z-10 shadow-[0px_0px_6px_2px_#00000033]">
      <h1 className="text-4xl font-montserrat italic  text-primary">
        Amigurumis da Rosi
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
