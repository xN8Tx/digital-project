import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { TextUIProps } from '../../../types/types';

import style from './SmallArticleText.module.scss';

export const SmallArticleText = forwardRef<HTMLParagraphElement, TextUIProps>(({ children }, ref) => (
  <p ref={ref} className={style.SmallArticleText}>
    {children}
  </p>
));

export const MSmallArticleText = motion(SmallArticleText);
