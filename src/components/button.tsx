import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "danger" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const buttonStyleVariantMap: Record<ButtonVariant, string> = {
  primary: "text-foregroundSecondary bg-primary",
  danger: "text-foregroundSecondary bg-danger",
  ghost: "text-primary bg-transparent",
  outline: "text-primary bg-tranparent border-2 border-primary ",
};

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex gap-2 items-center text-center hover:brightness-[115%] w-fit p-3 rounded-xl text-xl",
        buttonStyleVariantMap[props?.variant ?? "primary"],
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
