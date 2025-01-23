export function compareSearch(search: string, target: string) {
  return !!search.length && target.startsWith(search);
}
