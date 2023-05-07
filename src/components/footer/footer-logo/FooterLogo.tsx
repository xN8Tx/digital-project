import React from 'react';

import LogoWhite from '../../../assets/svg/LogoWhite.svg';

import './FooterLogo.scss';

export default function FooterLogo() {
  return (
    <div className="footer__logo">
      <img src={LogoWhite} alt="Logo-white" className="footer__logo_image" />
    </div>
  );
}
