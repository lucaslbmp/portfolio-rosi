"use client";

import InputField from "@/components/input-field";
import { createProductAction } from "@/app/actions/create-product";
import { ProductCardProps } from "@/types";
import { updateProductAction } from "@/app/actions/update-product";
import { FormEventHandler, useState } from "react";
import SubmitButton from "@/components/submit-button";
import CurrencyInput from "@/components/currency-input";

const ProductForm = ({
  category,
  product,
  onSubmit,
}: {
  category: number;
  product?: ProductCardProps & { id: number };
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) => {
  const { id, name, size, payment } = product ?? {};
  const { regularPrice, sellingPrice, alternativeMethod } = payment ?? {};
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        if (id) await updateProductAction(formData);
        else await createProductAction(formData);
        setIsLoading(false);
        if (onSubmit) onSubmit(e);
      }}
      className="flex flex-col gap-4 items-center"
    >
      <InputField label="Nome" name="name" defaultValue={name} required={!id} />
      <InputField
        label="Tamanho"
        name="size"
        defaultValue={size ?? undefined}
      />
      <input
        type="number"
        defaultValue={category}
        className="hidden"
        name="category"
      />
      <input
        type="number"
        defaultValue={id}
        className="hidden"
        name="product-id"
      />
      <InputField label="Imagem" type="file" name="imageFile" required={!id} />
      <div className="flex gap-4">
        <CurrencyInput
          label="Preço original"
          name="regularPrice"
          defaultValue={regularPrice}
        />
        <CurrencyInput
          label={"Preço de venda"}
          name="sellingPrice"
          defaultValue={sellingPrice ?? undefined}
        />
      </div>
      <InputField
        label="Método de pag. alternativo"
        name="alternativeMethod"
        defaultValue={alternativeMethod ?? undefined}
      />
      <SubmitButton pending={isLoading}>Enviar</SubmitButton>
    </form>
  );
};

export default ProductForm;
