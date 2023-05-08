import React from 'react';
import { useProjectsStore } from '../../../../../store/projects-store';

import { CurrentIndexType } from '../../../../../types/types';

import SliderTextItem from '../slider-text-item/SliderTextItem';

import './SliderText.scss';

export default function SliderText({ currentIndex }: CurrentIndexType) {
  const sliderArray = useProjectsStore((store) => store.entities);

  return (
    <div className="home-slider__text">
      {sliderArray.map((route, index) => {
        const firstWord: string = route.name.split(' ').shift()!;
        const lastWord: string = route.name.split(' ').pop()!;

        if (currentIndex === index) return <SliderTextItem firstWord={firstWord} lastWord={lastWord} active />;
        return <SliderTextItem firstWord={firstWord} lastWord={lastWord} active={false} />;
      })}
    </div>
  );
}
