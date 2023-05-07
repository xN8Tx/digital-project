import React from 'react';

import { socialMediaInformation } from '../../../data/contact-information';

import FooterSocialItem from '../footer-social-item/FooterSocialItem';

import './FooterSocialList.scss';

export default function FooterSocialList() {
  return (
    <ul className="footer__social_list">
      {socialMediaInformation.map((social, index) => (
        <FooterSocialItem key={index} to={social.to}>
          {social.image}
        </FooterSocialItem>
      ))}
    </ul>
  );
}
