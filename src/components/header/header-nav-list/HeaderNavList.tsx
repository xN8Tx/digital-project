import React from 'react';

import { routes } from '../../../routes/routes';

import HeaderNavItem from '../header-nav-item/HeaderNavItem';

import './HeaderNavList.scss';

interface IHeaderNavListProps {
  isBurgerActive: boolean;
  setIsBurgerActive: (isBurgerActive: boolean) => void;
}

export default function HeaderNavList({ isBurgerActive, setIsBurgerActive }: IHeaderNavListProps) {
  const onLinkClick = () => {
    setIsBurgerActive(false);
    document.body.setAttribute('data-lock', 'false');
  };

  return (
    <ul className="header__nav_list" data-burger={isBurgerActive}>
      {routes.map((route, index) => {
        if (route.isShowed) {
          return (
            <HeaderNavItem key={index} path={route.path} isBurgerActive={isBurgerActive} onClick={onLinkClick}>
              {route.name}
            </HeaderNavItem>
          );
        }
        return null;
      })}
    </ul>
  );
}
