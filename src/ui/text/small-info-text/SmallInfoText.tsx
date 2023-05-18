import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { TextUIProps } from '../../../types/types';

import style from './SmallInfoText.module.scss';

export const SmallInfoText = forwardRef<HTMLParagraphElement, TextUIProps>(({ children }, ref) => (
  <p ref={ref} className={style.SmallInfoText}>
    {children}
  </p>
));

export const MSmallInfoText = motion(SmallInfoText);
