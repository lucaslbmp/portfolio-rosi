import { BaseSyntheticEvent, ReactNode } from "react";

export interface PaymentProps {
  regularPrice: number;
  sellingPrice?: number | null;
  alternativeMethod?: string | null;
}

export interface ProductCardProps {
  name: string;
  thumbnail: string;
  payment?: PaymentProps;
  size?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
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

export type ContactItemProps = {
  name: string;
  icon: string;
  content: string;
  link: string;
};

export interface ProductFormType {
  name: string;
  size: string;
  imageFile: File;
  payment?: PaymentProps;
}

export interface ProductUpdateFormType {
  name?: string;
  size?: string;
  imageFile?: File;
  payment?: PaymentProps;
}
