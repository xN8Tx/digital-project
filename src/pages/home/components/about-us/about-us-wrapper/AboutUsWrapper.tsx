import React from 'react';
import { motion } from 'framer-motion';

import AboutUsImage from '../about-us-image/AboutUsImage';
import AboutUsText from '../about-us-text/AboutUsText';

import './AboutUsWrapper.scss';

export default function AboutUsWrapper() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      className="home-about-us__wrapper"
    >
      <AboutUsImage />
      <AboutUsText />
    </motion.div>
  );
}
