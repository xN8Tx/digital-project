import React from 'react';

import LogoBlack from '../../../assets/svg/LogoBlack.svg';

import './HeaderLogo.scss';

export default function HeaderLogo() {
  return (
    <div className="header__logo">
      <img src={LogoBlack} className="header__logo_img" alt="Logo" />
    </div>
  );
}
