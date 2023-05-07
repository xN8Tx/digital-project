import React from 'react';

import FooterLogo from './footer-logo/FooterLogo';
import FooterInformation from './footer-information/FooterInformation';
import FooterContact from './footer-contact/FooterContact';
import FooterSocial from './footer-social/FooterSocial';
import FooterRights from './footer-rights/FooterRights';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <FooterLogo />
        <FooterInformation />
        <FooterContact />
        <FooterSocial />
      </div>
      <FooterRights />
    </footer>
  );
}
