import { deleteCategoryAction } from "@/app/actions/delete-category";
import { updateCategoryAction } from "@/app/actions/update-category";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import OverlayPanel from "@/components/overlay-panel";

interface CategoryHeaderProps {
  id: number;
  name: string;
}

const ActionButton = ({ label, icon }: { label: string; icon: string }) => (
  <Button
    type="button"
    variant="ghost"
    className="text-gray-400 hover:text-primaryLight text-base"
  >
    <i className={`fa-solid ${icon} text-base`} />
    {label}
  </Button>
);

const CategoryHeader = ({
  id: categoryId,
  name: categoryName,
}: CategoryHeaderProps) => {
  return (
    <div className="border-b-2 border-primaryLight flex gap-4 items-center">
      <h3 className="text-2xl text-primary ">{categoryName}</h3>

      <OverlayPanel
        triggerButton={<ActionButton label="Editar" icon="fa-pencil" />}
      >
        <form
          action={updateCategoryAction}
          className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6 w-[25rem]"
        >
          <h3 className="text-2xl font-bold">Editar categoria</h3>
          <InputField
            label="Categoria"
            name="categoryName"
            defaultValue={categoryName}
          />
          <input
            type="number"
            name="categoryId"
            defaultValue={categoryId}
            className="hidden"
          />
          <Button className="mx-auto">Enviar</Button>
        </form>
      </OverlayPanel>

      <OverlayPanel
        triggerButton={<ActionButton label="Deletar" icon="fa-trash" />}
      >
        <form
          action={deleteCategoryAction}
          className="px-4 py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold">Deletar categoria</h3>
          <input
            type="number"
            name="categoryId"
            defaultValue={categoryId}
            className="hidden"
          />
          <span>Você deseja mesmo excluir esta categoria?</span>
          <Button className="mx-auto">Confirmar</Button>
        </form>
      </OverlayPanel>
    </div>
  );
};

export default CategoryHeader;
