import React from 'react';

import { IButtonUIProps } from '../../../types/types';

import style from './ThickButton.module.scss';

export default function ThickButton({ children, onClick }:IButtonUIProps) {
  return (
    <button type="button" className={style.ThickButton} onClick={onClick}>
      {children}
    </button>
  );
}
