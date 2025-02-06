import { ContactItemProps, ProductCardProps } from "./types";
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
    image: path,
    payment: {
      regularPrice: 100,
      sellingPrice: 100,
      alternativeMethod: "ou em até 10x de R$10,00",
    },
    size: "4cm x 2cm",
    category: category,
  };
});

export const contacts: ContactItemProps[] = [
  {
    name: "Facebook",
    icon: "fab fa-facebook",
    content: "Rosimeire Pinheiro de Moura",
    link: "https://web.facebook.com/rosi.pinheirodemoura",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    content: "@rosipmoura",
    link: "https://instagram.com/rosipmoura",
  },
  {
    name: "Email",
    icon: "fa-solid fa-envelope",
    content: "rosi_pinheiro_moura@hotmail.com",
    link: "mailto:rosi_pinheiro_moura@hotmail.com",
  },
];
