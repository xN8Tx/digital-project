import React from 'react';

import { ButtonUIProps } from '../../../types/types';

import style from './ThickButton.module.scss';

export default function ThickButton({ children, onClick }: ButtonUIProps) {
  return (
    <button type="button" className={style.ThickButton} onClick={onClick}>
      {children}
    </button>
  );
}
