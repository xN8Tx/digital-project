import React from 'react';

type CurrentIndexType = Pick<SliderTypes, 'currentIndex'>;

interface SliderTypes {
  currentIndex: number;
  setCurrentIndex: (newIndex: number) => void;
}

interface GalleryType {
  id: number;
  image: string;
}

interface ProjectType {
  id: number;
  name: string;
  description: string;
  imageFirst: string;
  imageSecond: string;
}

interface StoreType<T> {
  entities: T;
  loading: string;
  fetchData: (value?: number) => void;
}

interface StoreWithPagination<T> extends StoreType<T> {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  qntSlides: number;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface TextUIProps extends ChildrenProps {}

interface InputUIProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: any) => void;
}

interface ButtonUIProps extends ChildrenProps {
  onClick: (event: any) => void;
}

interface LinkProps extends ChildrenProps {
  to: string;
}

interface ContactFormProps {
  name: string;
  phoneNumber: string;
  email: string;
  product: string;
  message: string;

  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setProduct: (product: string) => void;
  setMessage: (message: string) => void;
}

export type {
  ChildrenProps,
  TextUIProps,
  InputUIProps,
  ButtonUIProps,
  LinkProps,
  ProjectType,
  GalleryType,
  StoreType,
  SliderTypes,
  CurrentIndexType,
  ContactFormProps,
  StoreWithPagination,
};
