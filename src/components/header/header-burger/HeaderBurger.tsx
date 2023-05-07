import React from 'react';

import './HeaderBurger.scss';

interface HeaderBurgerProps {
  isBurgerActive: boolean;
  setIsBurgerActive: (isBurgerActive: boolean) => void;
}

export default function HeaderBurger({ isBurgerActive, setIsBurgerActive }: HeaderBurgerProps) {
  const onBurgerChange = () => {
    setIsBurgerActive(!isBurgerActive);
    document.body.setAttribute('data-lock', `${!isBurgerActive}`);
  };

  const onBurgerTab = (event: React.KeyboardEvent) => {
    if (!isBurgerActive && event.code === 'Enter') {
      onBurgerChange();
    } else if (isBurgerActive && event.code === 'Escape') {
      onBurgerChange();
    }
  };

  return (
    <div className="header__burger" role="button" tabIndex={0} onClick={onBurgerChange} onKeyDown={onBurgerTab}>
      <span className="header__burger_button" data-burger={isBurgerActive} />
    </div>
  );
}
