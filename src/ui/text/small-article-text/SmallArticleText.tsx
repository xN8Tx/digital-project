import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './SmallArticleText.module.scss';

export default function SmallArticleText({ children }: ITextUIProps) {
  return (
    <p className={style.SmallArticleText}>{children}</p>
  );
}
