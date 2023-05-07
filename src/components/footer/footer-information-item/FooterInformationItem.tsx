import React from 'react';
import { Link } from 'react-router-dom';

import { LinkProps } from '../../../types/types';

export default function FooterInformationItem({ children, to }: LinkProps) {
  return (
    <li className="footer__information_item">
      <Link to={to} className="footer__text">
        {children}
      </Link>
    </li>
  );
}
