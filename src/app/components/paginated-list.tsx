import { paginate } from "@/utils";
import Pagination from "rc-pagination";
import { JSX, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styles from "./paginated-list.module.css";

type ArrowType = "page" | "prev" | "next" | "jump-prev" | "jump-next";

interface PaginatedListProps<T> {
  list: Array<T>;
  pageSize: number;
  mapFunction: (value: T, index: number, array: T[]) => JSX.Element;
  listClassName?: string;
}

const prevNextArrow = (
  current: number,
  type: ArrowType,
  originalElement: React.ReactNode
) => (
  <button>
    {type === "prev" ? (
      <FaAngleLeft />
    ) : type === "next" ? (
      <FaAngleRight />
    ) : (
      originalElement
    )}
  </button>
);

const PaginatedList = <T,>({
  list,
  pageSize,
  mapFunction,
  listClassName,
}: PaginatedListProps<T>) => {
  const [currPage, setCurrPage] = useState(1);

  const updatePage = (page: number) => {
    setCurrPage(page);
  };

  useEffect(() => {
    setCurrPage(1);
  }, [list]);

  return (
    <>
      <div className={listClassName}>
        {paginate<T>(list, pageSize, currPage).map(mapFunction)}
      </div>
      <Pagination
        className={styles.pagination}
        pageSize={pageSize}
        onChange={updatePage}
        current={currPage}
        total={list.length}
        showSizeChanger={true}
        itemRender={prevNextArrow}
        showTitle={false}
        hideOnSinglePage
      />
    </>
  );
};

export default PaginatedList;
