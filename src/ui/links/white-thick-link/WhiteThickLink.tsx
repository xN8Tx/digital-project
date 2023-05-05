import React from 'react';
import { Link } from 'react-router-dom';

import { ILinkUIProps } from '../../../types/types';

import ArrowRight from '../../../assets/svg/ArrowRight.svg';

import style from './WhiteThickLink.module.scss';

export default function WhiteThickLink({ children, to }:ILinkUIProps) {
  return (
    <Link to={to} className={style.WhiteThickLink}>
      {children}
      <img src={ArrowRight} alt="right"/>
    </Link>
  );
}