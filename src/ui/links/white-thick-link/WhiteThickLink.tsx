import React from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from '../../../types/types';

import SliderArrowNext from '../../../assets/svg/SliderArrowNext.svg';

import style from './WhiteThickLink.module.scss';

export default function WhiteThickLink({ children, to, ...props }: LinkProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link to={to} className={style.WhiteThickLink} {...props}>
      {children}
      <img src={SliderArrowNext} alt="right" />
    </Link>
  );
}
