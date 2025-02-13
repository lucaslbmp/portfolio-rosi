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
    className="text-gray-400 hover:text-primaryLight text-base"
  >
    <i className={`fa-solid ${props.icon} text-base`} />
    {props.label}
  </Button>
);

export default ActionButton;
