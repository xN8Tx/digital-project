import React from 'react';

import SliderArrowNext from '../../../assets/svg/SliderArrowNext.svg';
import SliderArrowPrevious from '../../../assets/svg/SliderArrowPrevious.svg';

import './SlideButtons.scss';

interface SliderButtonsProps {
  type: string;
  onClick: () => void;
}

export default function SliderButtons({ type, onClick }: SliderButtonsProps) {
  const isNext = type === 'next';
  const src = isNext ? SliderArrowNext : SliderArrowPrevious;

  return (
    <button type="button" className="slider_buttons" onClick={onClick}>
      <img src={src} alt="" />
    </button>
  );
}
