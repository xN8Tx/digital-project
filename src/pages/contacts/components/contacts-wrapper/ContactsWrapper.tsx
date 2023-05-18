import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ContactsInfo from '../contacts-info/ContactsInfo';
import ContactsMap from '../contacts-map/ContactsMap';

import './ContactsWrapper.scss';
import Modal from '../../../../components/modal/Modal';

export default function ContactsWrapper() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="contacts__wrapper">
      <ContactsInfo setIsModalOpen={setIsModalOpen} />
      <ContactsMap />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </motion.section>
  );
}
