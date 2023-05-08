import React from 'react';

import AboutUsPhoto from '../../../../../assets/images/AboutUsPhoto.png';

import './AboutUsImage.scss';

export default function AboutUsImage() {
  return (
    <div className="home-about-us__image">
      <img src={AboutUsPhoto} alt="About us" />
    </div>
  );
}
