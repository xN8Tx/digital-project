import React from 'react';
import { motion } from 'framer-motion';

import ContactPhoto from '../../../../../assets/images/Contact.png';

import './ContactUsImage.scss';
import { textAnimation } from '../../../../../animation/animations';

export default function ContactUsImage() {
  return (
    <motion.div variants={textAnimation} custom={2} className="home-contact__image">
      <img src={ContactPhoto} alt="" className="home-contact__image_image" />
    </motion.div>
  );
}
