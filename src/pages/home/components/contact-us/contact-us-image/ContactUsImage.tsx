import React from 'react';

import ContactPhoto from '../../../../../assets/images/Contact.png';

import './ContactUsImage.scss';

export default function ContactUsImage() {
  return (
    <div className="home-contact__image">
      <img src={ContactPhoto} alt="" className="home-contact__image_image" />
    </div>
  );
}
