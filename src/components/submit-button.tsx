import { ButtonHTMLAttributes } from "react";
import Button from "./button";
import LoadingSpinner from "./spinner";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = (props: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && <Button type="submit" {...props}></Button>}
      {pending && <LoadingSpinner />}
    </>
  );
};

export default SubmitButton;
