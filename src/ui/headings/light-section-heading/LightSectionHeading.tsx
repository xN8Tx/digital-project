import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './LightSectionHeading.module.scss';

export default function LightSectionHeading({ children }: TextUIProps) {
  return <h3 className={style.LightSectionHeading}>{children}</h3>;
}
