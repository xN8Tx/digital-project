import React from 'react';

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
  fetchData: (value: number) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface TextUIProps extends ChildrenProps {}

interface InputUIProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: any) => void;
}

interface ButtonUIProps extends ChildrenProps {
  onClick: (event: any) => void;
}

interface LinkProps extends ChildrenProps {
  to: string;
}

export type { ChildrenProps, TextUIProps, InputUIProps, ButtonUIProps, LinkProps, ProjectType, GalleryType, StoreType };
