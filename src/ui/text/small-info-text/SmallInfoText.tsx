import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './SmallInfoText.module.scss';

export default function SmallInfoText({ children }: TextUIProps) {
  return <p className={style.SmallInfoText}>{children}</p>;
}
