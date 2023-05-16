import React, { useState } from 'react';

import ContactsInfo from '../contacts-info/ContactsInfo';
import ContactsMap from '../contacts-map/ContactsMap';

import './ContactsWrapper.scss';
import Modal from '../../../../components/modal/Modal';

export default function ContactsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className="contacts__wrapper">
      <ContactsInfo setIsModalOpen={setIsModalOpen} />
      <ContactsMap />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </section>
  );
}
