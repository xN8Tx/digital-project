import React from 'react';

import LightSectionHeading from '../../../../../ui/headings/light-section-heading/LightSectionHeading';
import ContactUsForm from '../contact-us-form/ContactUsForm';
import ContactUsImage from '../contact-us-image/ContactUsImage';

import './ContactUsWrapper.scss';

export default function ContactUsWrapper() {
  return (
    <div className="home-section">
      <LightSectionHeading>Связаться с нами</LightSectionHeading>
      <div className="home-contact__wrapper_body">
        <ContactUsForm />
        <ContactUsImage />
      </div>
    </div>
  );
}
