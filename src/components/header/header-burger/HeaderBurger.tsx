import React from 'react';

import './HeaderBurger.scss';

interface HeaderBurgerProps {
  isBurgerActive: boolean;
  onBurgerChange: React.MouseEventHandler<HTMLDivElement>;
}

export default function HeaderBurger({ isBurgerActive, onBurgerChange } : HeaderBurgerProps) {
  return (
    <div className="header__burger" onClick={onBurgerChange}>
      <span className="header__burger_button" data-burger={isBurgerActive}></span>
    </div>
  );
}
