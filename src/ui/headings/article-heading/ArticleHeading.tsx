import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './ArticleHeading.module.scss';

export default function ArticleHeading({ children }: ITextUIProps) {
  return (
    <h3 className={style.ArticleHeading}>{children}</h3>
  );
}
