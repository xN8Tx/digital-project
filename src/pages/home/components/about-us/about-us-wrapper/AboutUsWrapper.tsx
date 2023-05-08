import React from 'react';

import AboutUsImage from '../about-us-image/AboutUsImage';
import AboutUsText from '../about-us-text/AboutUsText';

import './AboutUsWrapper.scss';

export default function AboutUsWrapper() {
  return (
    <div className="home-about-us__wrapper">
      <AboutUsImage />
      <AboutUsText />
    </div>
  );
}
