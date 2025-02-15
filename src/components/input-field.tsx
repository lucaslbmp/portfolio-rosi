import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <div className={twMerge("relative mt-[1.5em] w-full", props.className)}>
      {props.label && (
        <label
          htmlFor={props.name}
          className="absolute font-bold top-[-1.5em] left-1"
        >
          {props.label}
        </label>
      )}
      <input
        {...props}
        className={
          "border-2 border-border p-2 rounded-lg focus-visible:outline-primary w-full"
        }
      >
        {props.children}
      </input>
    </div>
  );
};

export default InputField;
