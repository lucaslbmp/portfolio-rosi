import { ProductCardProps } from "./types";
import productsImagesPaths from "../productsImagesPaths.json";
import { capitalize } from "./utils";

// const prefix = "/products-pics/";

export const categories = [
  "Animações",
  "Animais",
  "Pessoas",
  "Super-Heróis",
  "Outros",
];

export const products: ProductCardProps[] = productsImagesPaths.map((path) => {
  const [root, category, filename] = path.substring(1).split("/");
  return {
    name: capitalize(filename.replace(".jpg", "").split("-").join(" ")),
    thumbnail: path,
    payment: {
      regularPrice: 100,
      sellingPrice: 100,
      alternativeMethod: "ou em até 10x de R$10,00",
    },
    size: "4cm x 2cm",
    category: category,
  };
});
