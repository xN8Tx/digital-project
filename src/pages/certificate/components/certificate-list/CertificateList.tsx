import React from 'react';
import { motion } from 'framer-motion';

import FirstCertificate from '../../../../assets/images/FirstCertificate.png';
import SecondCertificate from '../../../../assets/images/SecondCertificate.png';
import ThirdCertificate from '../../../../assets/images/ThirdCertificate.png';
import LazyImg from '../../../../ui/images/LazyImg';

import './CertificateList.scss';
import { imageAnimation } from '../../../../animation/animations';

export default function CertificateList() {
  return (
    <div className="certificate__list">
      <motion.div variants={imageAnimation} custom={1 * 0.3}>
        <LazyImg src={FirstCertificate} alt="Сертификат" className="certificate__image" />
      </motion.div>
      <motion.div variants={imageAnimation} custom={2 * 0.3}>
        <LazyImg src={SecondCertificate} alt="Сертификат" className="certificate__image" />
      </motion.div>
      <motion.div variants={imageAnimation} custom={3 * 0.3}>
        <LazyImg src={ThirdCertificate} alt="Сертификат" className="certificate__image" />
      </motion.div>
    </div>
  );
}
