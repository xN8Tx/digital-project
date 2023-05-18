import React from 'react';
import { motion } from 'framer-motion';
import { useHomeStore } from '../../../../../store/home-store';

import { SliderTypes } from '../../../../../types/types';

import SliderButtons from '../../../../../components/slider/slider-buttons/SliderButtons';
import SliderCount from '../../../../../components/slider/slider-count/SliderCount';

import './SliderControllers.scss';
import { imageAnimation } from '../../../../../animation/animations';

export default function SliderControllers({ currentIndex, setCurrentIndex }: SliderTypes) {
  const sliderArray = useHomeStore((state) => state.entities);
  const maxIndex = sliderArray.length - 1;

  return (
    <motion.div variants={imageAnimation} custom={2} className="home-slider__controls">
      <SliderButtons currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} maxIndex={maxIndex} />
      <SliderCount currentIndex={currentIndex + 1} maxIndex={maxIndex + 1} />
    </motion.div>
  );
}
