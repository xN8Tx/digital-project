import React from 'react';

import { IButtonUIProps } from '../../../types/types';

import style from './ThinButton.module.scss';

export default function ThinButton({ children, onClick }:IButtonUIProps) {
  return (
    <button className={style.ThinButton} onClick={onClick}>
      {children}
    </button>
  );
}
