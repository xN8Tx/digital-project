import React from 'react';
import { motion } from 'framer-motion';

import AboutUsPhoto from '../../../../../assets/images/AboutUsPhoto.png';

import './AboutUsImage.scss';
import { imageAnimation } from '../../../../../animation/animations';

export default function AboutUsImage() {
  return (
    <motion.div variants={imageAnimation} className="home-about-us__image">
      <img src={AboutUsPhoto} alt="About us" />
    </motion.div>
  );
}
