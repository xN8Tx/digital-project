import React, { useState } from 'react';

import HeaderLogo from './header-logo/HeaderLogo';
import HeaderNavList from './header-nav-list/HeaderNavList';
import HeaderBurger from './header-burger/HeaderBurger';

import './index.scss';


export default function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
  
  const onBurgerChange = () => setIsBurgerActive(!isBurgerActive);
  
  return (
    <header className="header">
      <div className="wrapper">
        <HeaderLogo />
        <HeaderNavList isBurgerActive={isBurgerActive}/>
        <HeaderBurger isBurgerActive={isBurgerActive} onBurgerChange={onBurgerChange}/>
      </div>
    </header>
  );
}
