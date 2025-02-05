import { createCategoryAction } from "@/app/actions/create-category";
import Button from "@/components/button";
import InputField from "@/components/input-field";
import OverlayPanel from "@/components/overlay-panel";

const AddCategoryButton = () => {
  return (
    <OverlayPanel
      triggerButton={
        <Button className="mx-auto mt-8">
          <i className="fa-solid fa-plus text-2xl" />
          Adicionar categoria
        </Button>
      }
    >
      <form
        action={createCategoryAction}
        className="px-4 w-[25rem] py-2 bg-backgroundSecondary rounded-xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold">Adicionar categoria</h2>
        <InputField label="Categoria" name="categoryName" />
        <Button type="submit" className="mx-auto">
          Adicionar
        </Button>
      </form>
    </OverlayPanel>
  );
};

export default AddCategoryButton;
