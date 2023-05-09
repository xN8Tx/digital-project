import React from 'react';

import { ContactFormProps } from '../../types/types';

import ContactFormForm from './contact-form-form/ContactFormForm';
import ContactFormPolicy from './contact-form-policy/ContactFormPolicy';

import './ContactForm.scss';

export default function ContactForm({
  name,
  phoneNumber,
  email,
  product,
  message,
  setName,
  setEmail,
  setPhoneNumber,
  setProduct,
  setMessage,
}: ContactFormProps) {
  return (
    <div className="contact-form">
      <ContactFormForm
        name={name}
        phoneNumber={phoneNumber}
        email={email}
        product={product}
        message={message}
        setName={setName}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setProduct={setProduct}
        setMessage={setMessage}
      />
      <ContactFormPolicy />
    </div>
  );
}
