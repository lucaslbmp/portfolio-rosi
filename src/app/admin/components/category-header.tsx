import EditCategoryButton from "./buttons/edit-category-button";
import DeleteCategoryButton from "./buttons/delete-category-button";
import AddProductButton from "./buttons/add-product-button";

interface CategoryHeaderProps {
  id: number;
  name: string;
}

const CategoryHeader = ({
  id: categoryId,
  name: categoryName,
}: CategoryHeaderProps) => {
  return (
    <div className="border-b-2 border-primaryLight flex gap-6 items-center justify-between md:justify-normal w-full">
      <h3 className="text-2xl text-primary ">{categoryName}</h3>

      <div className="flex gap-2 md:gap-4">
        <EditCategoryButton
          categoryName={categoryName}
          categoryId={categoryId}
        />

        <DeleteCategoryButton categoryId={categoryId} />

        <AddProductButton
          categoryId={categoryId}
          label="Adicionar produto"
          className="text-base bg-transparent text-gray-400 hover:text-primaryLight"
        />
      </div>
    </div>
  );
};

export default CategoryHeader;
