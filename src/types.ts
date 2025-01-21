import { ReactNode } from "react";

export interface PaymentProps {
  regularPrice: number;
  sellingPrice?: number;
  alternativeMethod?: string;
}

export interface ProductCardProps {
  name: string;
  thumbnail: string;
  payment?: PaymentProps;
  size?: string;
  category: string;
}

