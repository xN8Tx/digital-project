import React from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from '../../../types/types';

import ArrowRight from '../../../assets/svg/ArrowRight.svg';

import style from './DarkThickLink.module.scss';

export default function DarkThickLink({ children, to }: LinkProps) {
  return (
    <Link to={to} className={style.DarkThickLink}>
      {children}
      <img src={ArrowRight} alt="right" />
    </Link>
  );
}
