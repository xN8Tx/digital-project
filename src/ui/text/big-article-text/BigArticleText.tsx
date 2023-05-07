import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './BigArticleText.module.scss';

export default function BigArticleText({ children }: TextUIProps) {
  return <p className={style.BigArticleText}>{children}</p>;
}
