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

export interface TabsContainerProps {
  tabs: TabProps[];
}

export interface TabProps {
  label: string;
  value?: string;
  pane: ReactNode;
}

export interface SearchBarProps {
  className?: string;
  onSearch: (search: string) => void;
}
