import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './LightSectionHeading.module.scss';

export default function LightSectionHeading({ children }: ITextUIProps) {
  return (
    <h3 className={style.LightSectionHeading}>{children}</h3>
  );
}
