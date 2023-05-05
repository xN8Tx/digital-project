import React from 'react';

import { ITextUIProps } from '../../../types/types';

import style from './BigArticleText.module.scss';

export default function BigArticleText({ children }: ITextUIProps){
  return (
    <p className={style.BigArticleText}>{children}</p>
  );
}