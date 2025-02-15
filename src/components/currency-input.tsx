import { ComponentProps, FormEvent, useRef } from "react";
import InputField from "./input-field";

type CurrencyInputProps = ComponentProps<typeof InputField> & {
  //   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: number;
};

const CurrencyInput = (props: CurrencyInputProps) => {
  const { defaultValue } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const parseRawNumber = (value: string) => {
    const rawValue = value.slice(0, -2) + "." + value.slice(-2);
    return parseFloat(rawValue) || 0;
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    if (!inputRef.current || !hiddenInputRef.current) return;
    const digits = event.currentTarget.value.replace(/[^0-9.]/g, "");
    const rawNumber = parseRawNumber(digits);
    inputRef.current.value = formatCurrency(rawNumber);
    hiddenInputRef.current.value = rawNumber.toFixed(2);
  };

  return (
    <>
      <InputField
        {...props}
        ref={inputRef}
        defaultValue={formatCurrency(defaultValue ?? 0.0)}
        onInput={handleInput}
        name={props.name + "-display"}
      />
      <input
        type="hidden"
        ref={hiddenInputRef}
        defaultValue={defaultValue?.toFixed(2) ?? "0.0"}
        name={props.name}
      />
    </>
  );
};

export default CurrencyInput;
