interface CategoryItem {
  id: number;
  name: string;
}

interface CategoriesButtonsProps {
  categoriesList: CategoryItem[] | undefined;
  defaultCategory: number;
  handleCategoryChange: (value: string) => void;
}

const CategoriesButtons = ({
  categoriesList,
  defaultCategory,
  handleCategoryChange,
}: CategoriesButtonsProps) => {
  return (
    <form
      action=""
      onInput={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleCategoryChange(formData.get("categories") as string);
      }}
      className="flex flex-wrap justify-center gap-4"
    >
      {categoriesList?.map(({ id, name }) => (
        <div key={id} className="flex">
          <input
            id={`${id}`}
            type="radio"
            className="peer hidden"
            defaultValue={id}
            name="categories"
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
