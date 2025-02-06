import { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputFieldProps extends TextareaHTMLAttributes<HTMLElement> {
  label: string;
}

const TextareaField = (props: InputFieldProps) => {
  return (
    <div className={twMerge("relative mt-[1.5em]", props.className)}>
      <label
        htmlFor={props.name}
        className="absolute font-bold top-[-1.5em] left-1"
      >
        {props.label}
      </label>
      <textarea
        {...props}
        className={
          "border-2 border-border p-2 rounded-lg focus-visible:outline-primary w-full"
        }
      >
        {props.children}
      </textarea>
    </div>
  );
};

export default TextareaField;
