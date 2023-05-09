import React from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from '../../../types/types';

import WhiteArrow from '../../../assets/svg/WhiteArrow.svg';

import styles from './WhiteSmallLink.module.scss';

export default function WhiteSmallLink({ children, to }: LinkProps) {
  return (
    <Link to={to} className={styles.WhiteSmallLink}>
      {children}
      <img src={WhiteArrow} alt="right" />
    </Link>
  );
}
