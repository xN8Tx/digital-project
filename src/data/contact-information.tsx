import React from 'react';

import PhoneSvg from '../assets/svg-tsx/PhoneSvg';
import EmailSvg from '../assets/svg-tsx/EmailSvg';
import LocationSvg from '../assets/svg-tsx/LocationSvg';
import LikedinSvg from '../assets/svg-tsx/LikedinSvg';
import FacebookSvg from '../assets/svg-tsx/FacebookSvg';
import TwitterSvg from '../assets/svg-tsx/TwitterSvg';
import PinterestSvg from '../assets/svg-tsx/PinterestSvg';

type ContactsInformationType = {
  text: string;
  to: string;
  image: React.ReactElement;
};

type SocialMediaInformationType = Omit<ContactsInformationType, 'text'>;

const contactsInformation: ContactsInformationType[] = [
  { text: 'г. Москва, Фролов переулок 2', to: '/', image: <LocationSvg /> },
  { text: '+7 (999) 888-77-66', to: '/', image: <PhoneSvg /> },
  { text: 'digital@mail.ru', to: '/', image: <EmailSvg /> },
];

const socialMediaInformation: SocialMediaInformationType[] = [
  { to: '/', image: <LikedinSvg /> },
  { to: '/', image: <FacebookSvg /> },
  { to: '/', image: <TwitterSvg /> },
  { to: '/', image: <PinterestSvg /> },
];

export { contactsInformation, socialMediaInformation };
