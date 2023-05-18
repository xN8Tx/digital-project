import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { TextUIProps } from '../../../types/types';

import style from './LightSectionHeading.module.scss';

export const LightSectionHeading = forwardRef<HTMLHeadingElement, TextUIProps>(({ children }, ref) => (
  <h3 ref={ref} className={style.LightSectionHeading}>
    {children}
  </h3>
));

export const MLightSectionHeading = motion(LightSectionHeading);
