export function compareSearch(search: string, target: string) {
  return !!search.length && target.startsWith(search);
}

export function paginate<T>(
  list: Array<T>,
  pageSize: number,
  currentPage: number
): Array<T> {
  const pageIndex = currentPage - 1;
  return list.slice(pageSize * pageIndex, pageSize * (pageIndex + 1));
}

export function capitalize(word: string) {
  return word.at(0)?.toUpperCase() + word.substring(1);
}

export function formatToReais(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function toNumber(str: string) {
  return !Number.isNaN(Number(str)) ? Number(str) : undefined;
}
