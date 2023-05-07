import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './ArticleHeading.module.scss';

export default function ArticleHeading({ children }: TextUIProps) {
  return <h3 className={style.ArticleHeading}>{children}</h3>;
}
