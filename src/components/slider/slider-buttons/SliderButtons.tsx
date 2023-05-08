import React from 'react';

import { SliderTypes } from '../../../types/types';
import { goToNext, goToPrevious } from '../../../utils/slider-functions';

import SliderButton from '../slider-button/SliderButton';

import './SliderButtons.scss';

interface SliderButtonsProps extends SliderTypes {
  sliderArray: unknown[];
}

export default function SliderButtons({ sliderArray, currentIndex, setCurrentIndex }: SliderButtonsProps) {
  const onNextButtonClick = () => goToNext({ sliderArray, currentIndex, setCurrentIndex });
  const onPreviousButtonClick = () => goToPrevious({ sliderArray, currentIndex, setCurrentIndex });

  return (
    <div className="slider__buttons">
      <SliderButton type="previous" onClick={onPreviousButtonClick} />
      <SliderButton type="next" onClick={onNextButtonClick} />
    </div>
  );
}
