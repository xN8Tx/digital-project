import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './WhiteSectionHeading.module.scss';

export default function WhiteSectionHeading({ children }: TextUIProps) {
  return <h3 className={style.WhiteSectionHeading}>{children}</h3>;
}
