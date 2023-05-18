import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { TextUIProps } from '../../../types/types';

import style from './DarkSectionHeading.module.scss';

export const DarkSectionHeading = forwardRef<HTMLHeadingElement, TextUIProps>(({ children }, ref) => (
  <h3 ref={ref} className={style.DarkSectionHeading}>
    {children}
  </h3>
));

export const MDarkSectionHeading = motion(DarkSectionHeading);
