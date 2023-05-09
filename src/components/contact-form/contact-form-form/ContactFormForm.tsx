import React from 'react';

import SmallMainInput from '../../../ui/inputs/small-main-input/SmallMainInput';
import BigMainInput from '../../../ui/inputs/big-main-input/BigMainInput';

import './ContactFormForm.scss';
import { ContactFormProps } from '../../../types/types';

export default function ContactFormForm({
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
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value);
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onProductChange = (event: React.ChangeEvent<HTMLInputElement>) => setProduct(event.target.value);
  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value);

  return (
    <form className="contact-form__form">
      <SmallMainInput type="text" value={name} onChange={onNameChange} placeholder="Имя" />
      <SmallMainInput type="tel" value={phoneNumber} onChange={onPhoneNumberChange} placeholder="Номер телефона" />
      <SmallMainInput type="email" value={email} onChange={onEmailChange} placeholder="E-mail" />
      <SmallMainInput type="text" value={product} onChange={onProductChange} placeholder="Интересующий товар/услуга" />
      <BigMainInput value={message} onChange={onMessageChange} placeholder="Сообщение" />
    </form>
  );
}
