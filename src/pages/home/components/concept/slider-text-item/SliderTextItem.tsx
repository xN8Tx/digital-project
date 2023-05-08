import React from 'react';

import './SliderTextItem.scss';

interface SliderTextItemProps {
  firstWord: string;
  lastWord: string;
  active: boolean;
}

export default function SliderTextItem({ firstWord, lastWord, active }: SliderTextItemProps) {
  return (
    <h2 className="home-slider__name" data-active={active}>
      <span className="home-slider__name_small">{firstWord}</span>
      <br />
      {lastWord}
    </h2>
  );
}
