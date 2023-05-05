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
      {/* eslint-disable-next-line array-callback-return */}
      {routes.map((el, index) => {
        if (el.isShowed) return <HeaderNavItem key={index} path={el.path}>{el.name}</HeaderNavItem>;
      })}
    </ul>
  );
}
