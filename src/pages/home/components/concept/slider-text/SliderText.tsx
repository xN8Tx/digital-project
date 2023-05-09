import React from 'react';
import { useProjectsStore } from '../../../../../store/projects-store';

import { CurrentIndexType } from '../../../../../types/types';

import SliderTextItem from '../slider-text-item/SliderTextItem';

import './SliderText.scss';

export default function SliderText({ currentIndex }: CurrentIndexType) {
  const sliderArray = useProjectsStore((store) => store.entities);

  return (
    <div className="home-slider__text">
      {sliderArray.map((slider, index) => {
        const firstWord: string = slider.name.split(' ').shift()!;
        const lastWord: string = slider.name.split(' ').pop()!;

        if (currentIndex === index)
          return <SliderTextItem key={slider.id} firstWord={firstWord} lastWord={lastWord} active />;
        return <SliderTextItem key={slider.id} firstWord={firstWord} lastWord={lastWord} active={false} />;
      })}
    </div>
  );
}
