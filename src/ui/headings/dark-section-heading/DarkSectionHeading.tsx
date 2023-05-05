import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './DarkSectionHeading.module.scss';

export default function DarkSectionHeading({ children }: ITextUIProps) {
  return (
    <h3 className={style.DarkSectionHeading}>{children}</h3>
  );
}
