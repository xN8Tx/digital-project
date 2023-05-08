import React from 'react';
import { useProjectsStore } from '../../../../../store/projects-store';

import { CurrentIndexType } from '../../../../../types/types';

import SliderImageItem from '../slider-image-item/SliderImageItem';

import './SliderImage.scss';

export default function SliderImage({ currentIndex }: CurrentIndexType) {
  const sliderArray = useProjectsStore((store) => store.entities);

  return (
    <div className="home-slider__image">
      {sliderArray.map((slider, index) => {
        if (index === currentIndex) {
          return <SliderImageItem key={slider.id} src={slider.imageFirst} id={slider.id} status />;
        }
        return <SliderImageItem key={slider.id} src={slider.imageFirst} id={slider.id} status={false} />;
      })}
    </div>
  );
}
