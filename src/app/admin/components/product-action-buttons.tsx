import Button from "@/components/button";
import OverlayPanel from "@/components/overlay-panel";
import ProductForm from "./product-form";
import { deleteProductAction } from "@/app/actions/delete-product";
import Image from "next/image";
import { PaymentProps } from "@/types";
import { shiftProductCategory } from "@/app/actions/shift-product-category";

const ProductActionButtons = ({
  id,
  name,
  image,
  size,
  payment,
  categoryId,
  categories,
}: {
  id: number;
  name: string;
  image: string;
  size?: string;
  payment?: PaymentProps;
  categoryId: number;
  categories: { id: number; name: string }[];
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* Edit button */}
      <OverlayPanel
        triggerButton={
          <Button title="Editar" className="w-12">
            <i className="fa-solid fa-pencil mx-auto" />
          </Button>
        }
      >
        <div className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Atualizar produto</h2>
          <div className="w-[6rem] h-[6rem] relative mx-auto">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <ProductForm
            product={{ id, name, size, image, payment }}
            category={categoryId}
          />
        </div>
      </OverlayPanel>

      {/* Delete button */}
      <OverlayPanel
        triggerButton={
          <Button title="Excluir" variant="danger" className="w-12">
            <i className="fa-solid fa-trash mx-auto" />
          </Button>
        }
      >
        <form
          action={deleteProductAction}
          className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
        >
          <h4 className="text-2xl font-bold">Deletar produto</h4>
          <p>
            Deseja mesmo deletar &quot;{name}&quot;? Essa ação não pode ser
            revertida!
          </p>
          <input
            type="number"
            defaultValue={id}
            name="product-id"
            className="hidden"
            required
          />
          <Button type="submit" className="mx-auto">
            Confirmar
          </Button>
        </form>
      </OverlayPanel>

      {/* Change category button */}
      <OverlayPanel
        triggerButton={
          <Button title="Trocar categoria" variant="outline">
            <i className="fa-solid fa-rotate" />
          </Button>
        }
      >
        <form
          action={shiftProductCategory}
          className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
        >
          <h4 className="text-2xl font-bold">Trocar categoria do produto</h4>
          <p>
            Selecione para qual categoria você deseja enviar &quot;{name}&quot;.
          </p>
          <input
            type="number"
            defaultValue={id}
            name="product-id"
            className="hidden"
            required
          />
          <div className="flex flex-col gap-2">
            {categories?.map(({ id, name }) => (
              <div key={id} className="flex gap-2">
                <input type="radio" name="category-id" value={id} required />
                <label htmlFor={`${id}`}>{name}</label>
              </div>
            ))}
          </div>

          <div className="w-[18rem] h-[18rem] relative mx-auto">
            <Image
              src={image}
              alt={name}
              fill
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
          <Button type="submit" className="mx-auto">
            Confirmar
          </Button>
        </form>
      </OverlayPanel>
    </div>
  );
};

export default ProductActionButtons;
