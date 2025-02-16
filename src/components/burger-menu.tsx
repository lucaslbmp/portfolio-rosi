"use client";

import { useState } from "react";

export default function BurgerMenu({
  menuItems,
}: {
  menuItems: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger Button */}
      <button
        className="text-2xl p-2 w-[37px]"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Menu */}
      <ul
        className={`absolute top-full right-0 bg-white shadow-lg rounded-lg min-w-max transform transition-opacity duration-[500ms] ${
          isOpen ? "opacity-90" : " opacity-0"
        } drop-shadow-[0_0_2px_#00000033]`}
      >
        {menuItems.map((item, index) => (
          <li key={index} className="border-b last:border-none px-3">
            <a
              href={item.href}
              className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
