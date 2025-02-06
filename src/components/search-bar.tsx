import { SearchBarProps } from "@/types";
import InputField from "./input-field";
import { twMerge } from "tailwind-merge";

const SearchBar = ({ className, onSearch }: SearchBarProps) => {
  return (
    <InputField
      label=""
      className={twMerge(
        "relative mx-auto after:pl-4 after:content-['🔎︎'] after:absolute after:left-0 after:top-[25%] [&_input]:pl-10 [&_input]:focus-within:outline-[unset]",
        className
      )}
      onChange={(e) => onSearch((e.currentTarget as HTMLInputElement)?.value)}
    />
  );
};

export default SearchBar;
