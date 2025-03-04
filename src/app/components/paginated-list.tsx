import { paginate } from "@/utils";
import Pagination from "./pagination";
import { JSX, useEffect, useState } from "react";

interface PaginatedListProps<T> {
  list: Array<T>;
  pageSize: number;
  mapFunction: (value: T, index: number, array: T[]) => JSX.Element;
  listClassName?: string;
}

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
        pageSize={pageSize}
        onChange={updatePage}
        current={currPage}
        total={list.length}
      />
    </>
  );
};

export default PaginatedList;
