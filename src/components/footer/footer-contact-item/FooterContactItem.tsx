import React from 'react';

import { LinkProps } from '../../../types/types';

export default function FooterContactItem({ children, to }: LinkProps) {
  return (
    <li className="footer__contact_item">
      <a href={to} className="footer__text">
        {children}
      </a>
    </li>
  );
}
