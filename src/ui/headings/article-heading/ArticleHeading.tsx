import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { TextUIProps } from '../../../types/types';

import style from './ArticleHeading.module.scss';

const ArticleHeading = forwardRef<HTMLHeadingElement, TextUIProps>(({ children }, ref) => (
  <h3 className={style.ArticleHeading} ref={ref}>
    {children}
  </h3>
));

export const MArticleHeading = motion(ArticleHeading);
