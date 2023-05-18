import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { ButtonUIProps } from '../../../types/types';

import style from './ThickButton.module.scss';

export const ThickButton = forwardRef<HTMLButtonElement, ButtonUIProps>(({ children, onClick }, ref) => (
  <button ref={ref} type="button" className={style.ThickButton} onClick={onClick}>
    {children}
  </button>
));

export const MThickButton = motion(ThickButton);
