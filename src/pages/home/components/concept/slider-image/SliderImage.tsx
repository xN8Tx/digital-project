import React from 'react';
import { motion } from 'framer-motion';
import { useHomeStore } from '../../../../../store/home-store';

import { imageAnimation } from '../../../../../animation/animations';
import { CurrentIndexType } from '../../../../../types/types';

import SliderImageItem from '../slider-image-item/SliderImageItem';

import './SliderImage.scss';

export default function SliderImage({ currentIndex }: CurrentIndexType) {
  const sliderArray = useHomeStore((store) => store.entities);

  return (
    <motion.div variants={imageAnimation} custom={2} className="home-slider__image">
      {sliderArray.map((slider, index) => {
        if (index === currentIndex) {
          return <SliderImageItem key={slider.id} src={slider.imageFirst} id={slider.id} status />;
        }
        return <SliderImageItem key={slider.id} src={slider.imageFirst} id={slider.id} status={false} />;
      })}
    </motion.div>
  );
}
