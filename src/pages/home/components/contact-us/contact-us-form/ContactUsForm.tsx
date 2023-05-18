import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

import ContactForm from '../../../../../components/contact-form/ContactForm';
import { ThickButton } from '../../../../../ui/buttons/thick-button/ThickButton';

import './ContactUsForm.scss';
import { imageAnimation } from '../../../../../animation/animations';

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
    <motion.div variants={imageAnimation} custom={1} className="home-contact__form">
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
    </motion.div>
  );
}
