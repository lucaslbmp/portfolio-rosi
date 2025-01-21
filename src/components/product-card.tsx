import { PaymentProps, ProductCardProps } from "@/types";
import Image from "next/image";

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

const ProductCard = ({ thumbnail, name, payment, size }: ProductCardProps) => {
  return (
    <article className="bg-backgroundSecondary rounded-xl text-center">
      <div className="h-[18rem] relative rounded-xl">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="rounded-t-xl"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-center h-[11rem] py-[1rem]">
        <div className="basis-1/6 text-lg font-bold">{name}</div>
        <div className="shrink-0 basis-4/6 pt-6">
          {payment ? (
            <PriceDisplay payment={payment} />
          ) : (
            <div className="text-[#bbb]">Preço indisponível</div>
          )}
        </div>
        <div className="basis-1/6">
          <strong>Tamanho: </strong>
          {size ?? "Indisponível"}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
