import React from 'react';

import { ButtonUIProps } from '../../../types/types';

import style from './ThinButton.module.scss';

export default function ThinButton({ children, onClick }: ButtonUIProps) {
  return (
    <button type="button" className={style.ThinButton} onClick={onClick}>
      {children}
    </button>
  );
}
