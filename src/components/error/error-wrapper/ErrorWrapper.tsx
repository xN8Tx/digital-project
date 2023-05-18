import React from 'react';

import { LightSectionHeading } from '../../../ui/headings/light-section-heading/LightSectionHeading';
import { DarkSectionHeading } from '../../../ui/headings/dark-section-heading/DarkSectionHeading';
import { DarkThickLink } from '../../../ui/links/dark-thick-link/DarkThickLink';

import './ErrorWrapper.scss';

interface ErrorWrapperProps {
  code: number;
  message: string;
}

export default function ErrorWrapper({ code, message }: ErrorWrapperProps) {
  return (
    <div className="error__wrapper">
      <div className="error__text">
        <DarkSectionHeading>{code}</DarkSectionHeading>
        <LightSectionHeading>{message}</LightSectionHeading>
      </div>
      <DarkThickLink to="/">Домой</DarkThickLink>
    </div>
  );
}
