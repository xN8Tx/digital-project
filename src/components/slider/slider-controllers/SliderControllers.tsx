import React from 'react';

import { SliderTypes } from '../../../types/types';

import SliderButtons from '../slider-buttons/SliderButtons';
import SliderCount from '../slider-count/SliderCount';

import './SliderControllers.scss';

interface SliderControllersProps extends SliderTypes {
  maxIndex: number;
}

export default function SliderControllers({ maxIndex, currentIndex, setCurrentIndex }: SliderControllersProps) {
  return (
    <div className="slider__controls">
      <SliderCount currentIndex={currentIndex} maxIndex={maxIndex} />
      <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} maxIndex={maxIndex} />
    </div>
  );
}
