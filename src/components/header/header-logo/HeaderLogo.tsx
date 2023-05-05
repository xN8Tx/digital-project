import React from 'react';

import Logo from '../../../assets/svg/Logo.svg';

import './HeaderLogo.scss';

export default function HeaderLogo() {
  return (
    <div className="header__logo">
      <img src={Logo} className="header__logo_img" alt="Logo" />
    </div>
  );
}
