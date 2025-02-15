import Button from "@/components/button";
import { HtmlHTMLAttributes } from "react";

type ActionButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon: string;
};

const ActionButton = (props: ActionButtonProps) => (
  <Button
    {...props}
    type="button"
    variant="ghost"
    className="text-gray-400 hover:text-primaryLight text-sm md:text-base md:[&_span]:block"
  >
    <i className={`fa-solid ${props.icon} text-base`} />
    <span className="hidden">{props.label}</span>
  </Button>
);

export default ActionButton;
