import { useForm } from "react-hook-form";

interface CategoryItem {
  id: number;
  name: string;
}

interface CategoriesButtonsProps {
  categoriesList: CategoryItem[] | undefined;
  defaultCategory: number;
  handleCategoryChange: (value: string) => void;
}

interface CategoriesForm {
  categories: string;
}

const CategoriesButtons = ({
  categoriesList,
  defaultCategory,
  handleCategoryChange,
}: CategoriesButtonsProps) => {
  const { register, getValues } = useForm<CategoriesForm>();

  return (
    <form
      action=""
      onInput={() => handleCategoryChange(getValues("categories"))}
      className="flex flex-wrap justify-center gap-4"
    >
      {categoriesList?.map(({ id, name }) => (
        <div key={id} className="flex">
          <input
            id={`${id}`}
            type="radio"
            className="peer hidden"
            defaultValue={id}
            {...register("categories")}
            defaultChecked={id === defaultCategory}
          />
          <label
            htmlFor={`${id}`}
            className={
              "text-lg p-3 border-2 rounded-lg transition-all duration-300 cursor-pointer box-border hover:text-primary hover:border-primary peer-checked:hover:text-foregroundSecondary peer-checked:bg-primaryLight peer-checked:text-foregroundSecondary peer-checked:border-primary"
            }
          >
            {name}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CategoriesButtons;
