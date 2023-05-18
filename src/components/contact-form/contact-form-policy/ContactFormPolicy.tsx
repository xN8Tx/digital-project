import React from 'react';

import { SmallInfoText } from '../../../ui/text/small-info-text/SmallInfoText';

import Tick from '../../../assets/svg/Tick.svg';

import './ContactFormPolicy.scss';

export default function ContactFormPolicy() {
  return (
    <div className="contact-form__policy">
      <img src={Tick} alt="Tick" />
      <SmallInfoText>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</SmallInfoText>
    </div>
  );
}
