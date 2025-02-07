import { ButtonHTMLAttributes, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "danger" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const buttonStyleVariantMap: Record<
  ButtonVariant,
  HTMLProps<HTMLElement>["className"]
> = {
  primary: "text-foregroundSecondary bg-primary hover:brightness-[115%]",
  danger: "text-foregroundSecondary bg-danger hover:brightness-[115%]",
  ghost: "text-primary bg-transparent",
  outline:
    "text-primary bg-tranparent border-2 border-primary hover:bg-[color-mix(in_srgb,#000,transparent_95%)]",
};

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex gap-2 items-center text-center w-fit p-3 rounded-xl text-xl",
        buttonStyleVariantMap[props?.variant ?? "primary"],
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
