import { ProductCardProps } from "./types";

const prefix = "/products-pics/";

export const products: ProductCardProps[] = [
  {
    name: "Alegria",
    thumbnail: prefix + "alegria.jpg",
    payment: {
      regularPrice: 100,
      sellingPrice: 100,
      alternativeMethod: "ou em até 10x de R$10,00",
    },
    size: "4cm x 2cm",
    category: "Divertidamente",
  },
  {
    name: "Anjo",
    thumbnail: prefix + "anjo.jpg",
    payment: {
      regularPrice: 110,
      sellingPrice: 80,
      alternativeMethod: "ou em até 10x de R$12,00",
    },
    size: "6cm x 3cm",
    category: "Personagens",
  },
  {
    name: "Inveja",
    thumbnail: prefix + "inveja.jpg",
    payment: {
      regularPrice: 100,
      sellingPrice: 100,
      alternativeMethod: "ou em até 10x de R$10,00",
    },
    size: "4cm x 2cm",
    category: "Divertidamente",
  },
  {
    name: "Cachorro",
    thumbnail: prefix + "cachorro.jpg",
    payment: {
      regularPrice: 150,
    },
    category: "Animais",
  },
  {
    name: "Ayrton Senna",
    thumbnail: prefix + "senna.jpg",
    category: "Personagens",
  },
];
