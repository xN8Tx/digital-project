import React from 'react';

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

export type { ChildrenProps, TextUIProps, InputUIProps, ButtonUIProps, LinkProps };
