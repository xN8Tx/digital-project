import React from 'react';
import { Link } from 'react-router-dom';

import { ILinkUIProps } from '../../../types/types';

import ArrowRight from '../../../assets/svg/ArrowRight.svg';

import style from './DarkThickLink.module.scss';

export default function DarkThickLink({ children, to }:ILinkUIProps) {
  return (
    <Link to={to} className={style.DarkThickLink}>
      {children}
      <img src={ArrowRight} alt="right" />
    </Link>
  );
}
