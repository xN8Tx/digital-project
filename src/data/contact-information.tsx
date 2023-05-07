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
  { text: '100000, Республика  Казахстан, г.Караганда, ул.Телевизионная 10', to: '/', image: <LocationSvg /> },
  { text: '+7 (701) 77 76 811', to: '/', image: <PhoneSvg /> },
  { text: 'Galym.sultanov@mail.ru', to: '/', image: <EmailSvg /> },
];

const socialMediaInformation: SocialMediaInformationType[] = [
  { to: '/', image: <LikedinSvg /> },
  { to: '/', image: <FacebookSvg /> },
  { to: '/', image: <TwitterSvg /> },
  { to: '/', image: <PinterestSvg /> },
];

export { contactsInformation, socialMediaInformation };
