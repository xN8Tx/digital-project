import React from 'react';
import { motion } from 'framer-motion';

import { MLightSectionHeading } from '../../../../../ui/headings/light-section-heading/LightSectionHeading';
import ContactUsForm from '../contact-us-form/ContactUsForm';
import ContactUsImage from '../contact-us-image/ContactUsImage';

import './ContactUsWrapper.scss';
import { textAnimation } from '../../../../../animation/animations';

export default function ContactUsWrapper() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 1, once: true }} className="home-section">
      <MLightSectionHeading variants={textAnimation} custom={1}>
        Связаться с нами
      </MLightSectionHeading>
      <div className="home-contact__wrapper_body">
        <ContactUsForm />
        <ContactUsImage />
      </div>
    </motion.div>
  );
}
