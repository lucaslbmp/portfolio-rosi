"use client";

import { PaymentProps, ProductCardProps } from "@/types";
import Image from "next/image";
import { useState } from "react";

const PriceDisplay = ({ payment }: { payment: PaymentProps }) => {
  const { regularPrice, sellingPrice, alternativeMethod } = payment;
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 justify-center items-center">
        <div
          className={
            sellingPrice
              ? "text-2xl text-[#bbb] line-through"
              : "text-2xl text-[#dd4444]"
          }
        >
          R$ {regularPrice.toFixed(2).replace(".", ",")}
        </div>
        {sellingPrice && (
          <div className="text-[#dd4444]">
            R$ {sellingPrice.toFixed(2).replace(".", ",")}
          </div>
        )}
      </div>

      <div>{alternativeMethod}</div>
    </div>
  );
};

const ProductCard = ({
  image,
  name,
  payment,
  size,
  onClick,
}: ProductCardProps) => {
  const [descriptionUp, setDescriptionUp] = useState(false);
  return (
    <article
      className="bg-backgroundSecondary rounded-xl text-center relative overflow-y-hidden cursor-pointer transition-transform duration-500 hover:[transform:scale(1.06)]"
      title="Clique para expandir"
      onClick={onClick}
    >
      <div className="h-[18rem] relative rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div
        className={`flex flex-col gap-4 justify-center px-4 py-4 absolute bottom-0 ${
          descriptionUp ? "translate-y-0" : "translate-y-[calc(100%-4.5rem)]"
        } left-0 right-0 bg-backgroundSecondary opacity-85 cursor-pointer transition-all delay-3000`}
        onMouseEnter={() => setDescriptionUp(true)}
        onMouseLeave={() => setDescriptionUp(false)}
      >
        <div
          className="text-lg font-bold mt-5 text-ellipsis overflow-hidden whitespace-nowrap"
          title={name}
        >
          {name}
        </div>
        <div className="items-center">
          {payment ? (
            <PriceDisplay payment={payment} />
          ) : (
            <div className="text-[#bbb]">Preço indisponível</div>
          )}
        </div>
        <div className="">
          <strong>Tamanho: </strong>
          {size ?? "Indisponível"}
        </div>
        <i
          className={`text-2xl py-2 fa-solid fa-circle-chevron-${
            descriptionUp ? "down" : "up"
          } absolute top-0 left-0 right-0`}
        />
      </div>
    </article>
  );
};

export default ProductCard;
