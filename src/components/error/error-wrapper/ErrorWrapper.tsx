import React from 'react';

import LightSectionHeading from '../../../ui/headings/light-section-heading/LightSectionHeading';
import DarkSectionHeading from '../../../ui/headings/dark-section-heading/DarkSectionHeading';
import DarkThickLink from '../../../ui/links/dark-thick-link/DarkThickLink';

import './ErrorWrapper.scss';

export default function ErrorWrapper() {
  return (
    <div className="error__wrapper">
      <div className="error__text">
        <DarkSectionHeading>404</DarkSectionHeading>
        <LightSectionHeading>Такой страницы не существует</LightSectionHeading>
      </div>
      <DarkThickLink to="/">Домой</DarkThickLink>
    </div>
  );
}
