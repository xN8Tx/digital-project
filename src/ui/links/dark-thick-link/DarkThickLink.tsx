import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { LinkProps } from '../../../types/types';

import ArrowRight from '../../../assets/svg/ArrowRight.svg';

import style from './DarkThickLink.module.scss';

export const DarkThickLink = forwardRef<HTMLAnchorElement, LinkProps>(({ children, to }, ref) => (
  <Link ref={ref} to={to} className={style.DarkThickLink}>
    {children}
    <img src={ArrowRight} alt="right" />
  </Link>
));

export const MDarkThickLink = motion(DarkThickLink);
