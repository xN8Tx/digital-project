import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './DarkSectionHeading.module.scss';

export default function DarkSectionHeading({ children }: TextUIProps) {
  return <h3 className={style.DarkSectionHeading}>{children}</h3>;
}
