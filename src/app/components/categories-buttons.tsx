import { useForm } from "react-hook-form";

interface CategoriesButtonsProps {
  categoriesList: string[] | undefined;
  defaultCategory: string;
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
      {categoriesList?.map((category) => (
        <div key={category} className="flex">
          <input
            id={category}
            type="radio"
            className="peer hidden"
            value={category}
            {...register("categories")}
            defaultChecked={category === defaultCategory}
          />
          <label
            htmlFor={category}
            className={
              "text-lg p-3 border-2 rounded-lg transition-all duration-300 cursor-pointer box-border hover:text-primary hover:border-primary peer-checked:hover:text-foregroundSecondary peer-checked:bg-primaryLight peer-checked:text-foregroundSecondary peer-checked:border-primary"
            }
          >
            {category}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CategoriesButtons;
