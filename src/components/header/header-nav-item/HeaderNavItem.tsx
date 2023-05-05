import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderNavItem.scss';

interface IHeaderNavItemProps {
  children: React.ReactNode,
  path: string,
};

export default function HeaderNavItem({ children, path }: IHeaderNavItemProps) {
  return (
    <li className="header__nav_item">
      <NavLink to={path} className="header__nav_link">{children}</NavLink>
    </li>
  );
}
