import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderNavItem.scss';
import { Context } from '../../../context/context';

interface IHeaderNavItemProps {
  children: React.ReactNode;
  isBurgerActive: boolean;
  path: string;
  onClick: () => void;
}

export default function HeaderNavItem({ children, path, isBurgerActive, onClick }: IHeaderNavItemProps) {
  const { clientWidth } = useContext(Context);

  const isTabIndexActive = clientWidth <= 768 && isBurgerActive;

  return (
    <li className="header__nav_item">
      <NavLink tabIndex={isTabIndexActive ? 0 : -1} to={path} className="header__nav_link" onClick={onClick}>
        {children}
      </NavLink>
    </li>
  );
}
