import React from 'react';

import { routes } from '../../../routes/routes';

import HeaderNavItem from '../header-nav-item/HeaderNavItem';

import './HeaderNavList.scss';

interface IHeaderNavListProps {
  isBurgerActive: boolean;
}

export default function HeaderNavList({ isBurgerActive }: IHeaderNavListProps) {
  return (
    <ul className="header__nav_list" data-burger={isBurgerActive}>
      {routes.map((route, index) => {
        if (route.isShowed) {
          return (
            <HeaderNavItem key={index} path={route.path} isBurgerActive={isBurgerActive}>
              {route.name}
            </HeaderNavItem>
          );
        }
        return null;
      })}
    </ul>
  );
}
