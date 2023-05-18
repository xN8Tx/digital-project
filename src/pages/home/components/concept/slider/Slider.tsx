import React, { useState } from 'react';
import { motion } from 'framer-motion';

import SliderText from '../slider-text/SliderText';
import SliderImage from '../slider-image/SliderImage';
import SliderControllers from '../slider-controllers/SliderControllers';

import './Slider.scss';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="home-slider">
      <SliderText currentIndex={currentIndex} />
      <SliderImage currentIndex={currentIndex} />
      <SliderControllers currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </motion.div>
  );
}
