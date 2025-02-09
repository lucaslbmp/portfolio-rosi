import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const HeaderBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge(
        "flex items-center justify-between px-4 md:px-16 py-2 shadow-[0px_0px_6px_2px_#00000033]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default HeaderBody;
