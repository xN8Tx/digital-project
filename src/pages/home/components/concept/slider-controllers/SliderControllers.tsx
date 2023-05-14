import React from 'react';

import { useHomeStore } from '../../../../../store/home-store';
import { SliderTypes } from '../../../../../types/types';

import SliderButtons from '../../../../../components/slider/slider-buttons/SliderButtons';
import SliderCount from '../../../../../components/slider/slider-count/SliderCount';

import './SliderControllers.scss';

export default function SliderControllers({ currentIndex, setCurrentIndex }: SliderTypes) {
  const sliderArray = useHomeStore((state) => state.entities);
  const maxIndex = sliderArray.length - 1;

  return (
    <div className="home-slider__controls">
      <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} maxIndex={maxIndex} />
      <SliderCount currentIndex={currentIndex + 1} maxIndex={maxIndex + 1} />
    </div>
  );
}
