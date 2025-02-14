import { ButtonHTMLAttributes } from "react";
import Button from "./button";
import LoadingSpinner from "./spinner";

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pending: boolean;
};

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <>
      {!props.pending && <Button type="submit" {...props}></Button>}
      {props.pending && <LoadingSpinner />}
    </>
  );
};

export default SubmitButton;
