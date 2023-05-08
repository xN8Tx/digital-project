import React from 'react';

import SliderArrowNext from '../../../assets/svg/SliderArrowNext.svg';
import SliderArrowPrevious from '../../../assets/svg/SliderArrowPrevious.svg';

import './SlideButton.scss';

interface SliderButtonProps {
  type: string;
  onClick: () => void;
}

export default function SliderButton({ type, onClick }: SliderButtonProps) {
  const isNext = type === 'next';
  const src = isNext ? SliderArrowNext : SliderArrowPrevious;

  return (
    <button type="button" className="slider_button" onClick={onClick}>
      <img src={src} alt="" />
    </button>
  );
}
