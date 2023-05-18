import React from 'react';
import { motion } from 'framer-motion';

import { MLightSectionHeading } from '../../../../../ui/headings/light-section-heading/LightSectionHeading';

import GoalsList from '../goals-list/GoalsList';
import { textAnimation } from '../../../../../animation/animations';

export default function GoalsWrapper() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 1, once: true }} className="home-section">
      <MLightSectionHeading variants={textAnimation}>Наши цели</MLightSectionHeading>
      <GoalsList />
    </motion.div>
  );
}
