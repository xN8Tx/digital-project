import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './BigInfoText.module.scss';

export default function BigInfoText({ children }: TextUIProps) {
  return <p className={style.BigInfoText}>{children}</p>;
}
