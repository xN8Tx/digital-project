import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './SmallInfoText.module.scss';

export default function SmallInfoText({ children }: ITextUIProps) {
  return (
    <p className={style.SmallInfoText}>{children}</p>
  );
}
