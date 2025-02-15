"use client";

import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface ProductFormPanelProps {
  children: ReactNode;
  triggerButton?: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

const OverlayPanel = ({
  children,
  triggerButton,
  isOpen,
  onClose,
}: ProductFormPanelProps) => {
  return (
    <>
      {/* {clickableConfirmButton} */}
      {triggerButton}

      {isOpen && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-xl overflow-hidden bg-backgroundSecondary shadow-[0_0_4px_2px_#00000033] pt-8 pb-4 px-4 max-w-[600px] w-[calc(100%-2rem)] md:w-[50vw]">
          <span
            className="absolute right-3 top-3 opacity-70 hover:opacity-100 cursor-pointer"
            onClick={() => onClose && onClose(isOpen)}
          >
            <i className="fa-solid fa-xmark text-5xl" />
          </span>
          <div className="w-full">{children}</div>
        </div>
      )}
    </>
  );
};

export default OverlayPanel;
