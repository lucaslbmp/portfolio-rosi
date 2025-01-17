import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        "flex gap-2 items-center text-center text-foregroundSecondary bg-primary hover:brightness-[115%] w-fit p-3 rounded-xl hover:bg-[color-mix:] text-xl" +
        " " +
        props.className
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
