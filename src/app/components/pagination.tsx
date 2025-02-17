import Pagination, { PaginationProps } from "rc-pagination";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

type ArrowType = "page" | "prev" | "next" | "jump-prev" | "jump-next";

const StyledPagination = ({ ...props }: PaginationProps) => {
  const itemButton = (
    current: number,
    type: ArrowType,
    originalElement: React.ReactNode
  ) => {
    const isPrevOrNext = type === "prev" || type === "next";
    return (
      <button
        className={twMerge(
          "h-8 w-8 rounded-lg flex justify-center items-center cursor-pointer disabled:opacity-50 disabled:cursor-default ",
          isPrevOrNext ? "" : "border-2 border-border"
        )}
      >
        {type === "prev" ? (
          <FaAngleLeft />
        ) : type === "next" ? (
          <FaAngleRight />
        ) : (
          originalElement
        )}
      </button>
    );
  };

  return (
    <Pagination
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-4 border-border",

        // Syling active button
        "[&>.rc-pagination-item-active_button]:bg-primaryLight [&>.rc-pagination-item-active]:text-foregroundSecondary [&>.rc-pagination-item-active_button]:border-primaryLight",

        // Styling non-active button
        "[&>li:not(.rc-pagination-item-active)_button:enabled:hover]:text-primaryLight [&>li:not(.rc-pagination-item-active)_button:enabled:hover]:border-primaryLight",
        props.className
      )}
      nextIcon={<FaAngleRight />}
      prevIcon={<FaAngleLeft />}
      itemRender={itemButton}
      showTitle={false}
      showSizeChanger={true}
      hideOnSinglePage
    />
  );
};

export default StyledPagination;
