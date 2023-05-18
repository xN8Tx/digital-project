import React from 'react';
import { motion } from 'framer-motion';

import ErrorWrapper from '../../components/error/error-wrapper/ErrorWrapper';

import './Error.scss';

export default function Error() {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
      }}
      className="error"
    >
      <ErrorWrapper code={404} message="Такой страницы не существует" />
    </motion.section>
  );
}
