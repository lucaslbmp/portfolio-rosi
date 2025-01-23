export function compareSearch(search: string, target: string) {
  return !!search.length && target.startsWith(search);
}


export function capitalize(word: string) {
  return word.at(0)?.toUpperCase() + word.substring(1);
}
