import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { TextUIProps } from '../../../types/types';

import style from './BigArticleText.module.scss';

export const BigArticleText = forwardRef<HTMLParagraphElement, TextUIProps>(({ children }, ref) => (
  <p ref={ref} className={style.BigArticleText}>
    {children}
  </p>
));

export const MBigArticleText = motion(BigArticleText);
