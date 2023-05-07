import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './BigInfoText.module.scss';

export default function BigInfoText({ children }: ITextUIProps) {
  return (
    <p className={style.BigInfoText}>{children}</p>
  );
}
