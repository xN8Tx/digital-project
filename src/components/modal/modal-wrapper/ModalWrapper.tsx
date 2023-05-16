import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ModalProps } from '../../../types/types';

import ModalTitle from '../modal-title/ModalTitle';
import ContactForm from '../../contact-form/ContactForm';
import ThinButton from '../../../ui/buttons/thin-button/ThinButton';

import './ModalWrapper.scss';

export default function ModalWrapper({ isModalOpen, setIsModalOpen }: ModalProps) {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onSendMessage = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setProduct('');
    setMessage('');

    toast.success('Мы скоро свяжемся с вами!');
    setIsModalOpen(false);
  };

  return (
    <div className="modal__wrapper">
      <ModalTitle isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ContactForm
        name={name}
        phoneNumber={phoneNumber}
        email={email}
        product={product}
        message={message}
        setName={setName}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        setProduct={setProduct}
        setMessage={setMessage}
      />
      <ThinButton onClick={onSendMessage}>Отправить</ThinButton>
    </div>
  );
}
