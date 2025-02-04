"use client";

import {
  ButtonHTMLAttributes,
  cloneElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import Button from "./button";

interface ProductFormPanelProps {
  children: ReactNode;
  confirmButton?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
}

const OverlayPanel = ({ children, confirmButton }: ProductFormPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickableConfirmButton = confirmButton ? (
    cloneElement(confirmButton, { onClick: () => setIsOpen(true) })
  ) : (
    <Button onClick={() => setIsOpen(true)}>Confirmar</Button>
  );

  return (
    <>
      {clickableConfirmButton}

      {isOpen && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-xl overflow-hidden bg-backgroundSecondary shadow-[0_0_4px_2px_#00000033] pt-8 pb-4 px-4">
          <span
            className="absolute right-3 top-3 opacity-70 hover:opacity-100 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark text-5xl" />
          </span>
          {children}
        </div>
      )}
    </>
  );
};

export default OverlayPanel;
