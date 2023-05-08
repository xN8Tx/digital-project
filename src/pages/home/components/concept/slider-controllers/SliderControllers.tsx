import React from 'react';

import { useProjectsStore } from '../../../../../store/projects-store';
import { SliderTypes } from '../../../../../types/types';

import SliderButtons from '../../../../../components/slider/slider-buttons/SliderButtons';
import SliderCount from '../../../../../components/slider/slider-count/SliderCount';

import './SliderControllers.scss';

export default function SliderControllers({ currentIndex, setCurrentIndex }: SliderTypes) {
  const sliderArray = useProjectsStore((state) => state.entities);
  const maxIndex = sliderArray.length;

  return (
    <div className="home-slider__controls">
      <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} sliderArray={sliderArray} />
      <SliderCount currentIndex={currentIndex} maxIndex={maxIndex} />
    </div>
  );
}
