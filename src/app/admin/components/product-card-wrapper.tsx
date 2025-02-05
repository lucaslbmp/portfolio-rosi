import Image from "next/image";
import { PaymentProps } from "@/types";
import { formatToReais } from "@/utils";
import ProductActionButtons from "./product-action-buttons";

const ProductProperty = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <div className={className}>
    <strong>{label}: </strong>
    {value}
  </div>
);

const ProductCardWrapper = (props: {
  id: number;
  name: string;
  thumbnail: string;
  size?: string;
  payment?: PaymentProps;
  categoryId: number;
}) => {
  const { id, name, thumbnail, size, categoryId, payment } = props;
  const { regularPrice, sellingPrice, alternativeMethod } = payment ?? {};

  return (
    <div>
      <div className="absolute left-4">
        <i className="fa-xmark" />
      </div>
      <div className="p-4 bg-backgroundSecondary w-[350px] h-[500px] rounded-xl">
        <div className="flex flex-col gap-4">
          <div className="h-[8rem] relative rounded-lg mx-8">
            <Image
              src={thumbnail}
              alt={name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div
            className="text-lg font-bold mt-5 text-ellipsis overflow-hidden whitespace-nowrap text-center"
            title={name}
          >
            {name}
          </div>
          <ProductProperty label={"Tamanho"} value={size ?? "Indisponível"} />
          <hr />
          <h2 className="font-bold text-center">Pagamento</h2>
          <div className="flex flex-col gap-2">
            <ProductProperty
              label={"Preço original"}
              value={regularPrice ? formatToReais(regularPrice) : "-"}
            />
            <ProductProperty
              label={"Preço de venda"}
              value={sellingPrice ? formatToReais(sellingPrice) : "-"}
            />
            <ProductProperty
              label={"Outro método de pagamento"}
              value={alternativeMethod ?? "-"}
              className="h-[2.5rem] leading-8 break-words overflow-ellipsis"
            />
          </div>

          <ProductActionButtons
            {...{
              id,
              name,
              thumbnail,
              size,
              payment,
              categoryId,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardWrapper;
