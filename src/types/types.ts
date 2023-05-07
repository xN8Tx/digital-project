import React from 'react';

interface ITextUIProps {
  children: React.ReactNode,
}

interface IInputUIProps {
  placeholder: string,
  type: string,
  value: string,
  onChange: (event: any) => void,
}

interface IButtonUIProps extends ITextUIProps {
  onClick: (event: any) => void,
}

interface ILinkUIProps extends ITextUIProps {
  to: string;
}

export type {
  ITextUIProps, IInputUIProps, IButtonUIProps, ILinkUIProps,
};
