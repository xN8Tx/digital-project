import React, { useState } from 'react';

import HeaderLogo from './header-logo/HeaderLogo';
import HeaderNavList from './header-nav-list/HeaderNavList';
import HeaderBurger from './header-burger/HeaderBurger';

import './Header.scss';

export default function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="wrapper">
        <HeaderLogo />
        <HeaderBurger isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
        <HeaderNavList isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
      </div>
    </header>
  );
}
