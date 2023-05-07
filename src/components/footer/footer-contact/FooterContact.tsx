import React from 'react';

import { contactsInformation } from '../../../data/contact-information';

import FooterColumn from '../footer-column/FooterColumn';
import FooterList from '../footer-list/FooterList';
import FooterContactItem from '../footer-contact-item/FooterContactItem';

export default function FooterContact() {
  return (
    <FooterColumn title="Контакты">
      <FooterList>
        {contactsInformation.map((contact, index) => (
          <FooterContactItem key={index} to={contact.to}>
            {contact.image}
            {contact.text}
          </FooterContactItem>
        ))}
      </FooterList>
    </FooterColumn>
  );
}
