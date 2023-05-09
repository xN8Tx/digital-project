import React, { useState } from 'react';
// I think i catch some bug with this rule...
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';

import ContactForm from '../../../../../components/contact-form/ContactForm';
import ThickButton from '../../../../../ui/buttons/thick-button/ThickButton';

import './ContactUsForm.scss';

export default function ContactUsForm() {
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
  };

  return (
    <div className="home-contact__form">
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
      <ThickButton onClick={onSendMessage}>Отправить</ThickButton>
    </div>
  );
}
