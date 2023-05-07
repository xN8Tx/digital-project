import React from 'react';

import { ChildrenProps } from '../../../types/types';

import './FooterList.scss';

export default function FooterList({ children }: ChildrenProps) {
  return <ul className="footer__list">{children}</ul>;
}
