import React, { useState } from 'react';
import SliderText from '../slider-text/SliderText';

import SliderImage from '../slider-image/SliderImage';
import SliderControllers from '../slider-controllers/SliderControllers';

import './Slider.scss';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="home-slider">
      <SliderText currentIndex={currentIndex} />
      <SliderImage currentIndex={currentIndex} />
      <SliderControllers currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}
