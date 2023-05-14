import React from 'react';

import { leadingZeros } from '../../../utils/slider-functions';

import './SliderCount.scss';

interface SliderCountProps {
  currentIndex: number;
  maxIndex: number;
}

export default function SliderCount({ currentIndex, maxIndex }: SliderCountProps) {
  return (
    <div className="slider__count">
      <span className="slider__count_bold">{`${leadingZeros(currentIndex)}`}</span> / {leadingZeros(maxIndex)}
    </div>
  );
}
