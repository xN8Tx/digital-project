import React from 'react';

import { LinkProps } from '../../../types/types';

export default function FooterSocialItem({ children, to }: LinkProps) {
  return (
    <a href={to} className="footer__social_item">
      {children}
    </a>
  );
}
