import React from 'react';
import { motion } from 'framer-motion';

import CertificateList from '../certificate-list/CertificateList';
import PageArticle from '../../../../components/page-article/PageArticle';

import './CertificateWrapper.scss';

export default function CertificateWrapper() {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="certificate__wrapper">
      <PageArticle firstWord="сертификаты" secondWord="компании" />
      <CertificateList />
    </motion.section>
  );
}
