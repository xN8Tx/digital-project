import React from 'react';
import { motion } from 'framer-motion';
import { useHomeStore } from '../../../../../store/home-store';

import { textAnimation } from '../../../../../animation/animations';
import { CurrentIndexType } from '../../../../../types/types';

import SliderTextItem from '../slider-text-item/SliderTextItem';

import './SliderText.scss';

export default function SliderText({ currentIndex }: CurrentIndexType) {
  const sliderArray = useHomeStore((store) => store.entities);

  return (
    <motion.div variants={textAnimation} custom={1} className="home-slider__text">
      {sliderArray.map((slider, index) => {
        const firstWord: string = slider.name.split(' ').shift()!;
        const lastWord: string = slider.name.split(' ').pop()!;

        if (currentIndex === index)
          return <SliderTextItem key={slider.id} firstWord={firstWord} lastWord={lastWord} active />;
        return <SliderTextItem key={slider.id} firstWord={firstWord} lastWord={lastWord} active={false} />;
      })}
    </motion.div>
  );
}
