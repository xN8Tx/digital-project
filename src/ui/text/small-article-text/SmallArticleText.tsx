import React from 'react';

import { TextUIProps } from '../../../types/types';

import style from './SmallArticleText.module.scss';

export default function SmallArticleText({ children }: TextUIProps) {
  return <p className={style.SmallArticleText}>{children}</p>;
}
