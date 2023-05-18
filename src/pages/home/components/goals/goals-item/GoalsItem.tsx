import React from 'react';
import { motion } from 'framer-motion';

import { imageAnimation } from '../../../../../animation/animations';

import { BigArticleText } from '../../../../../ui/text/big-article-text/BigArticleText';

import './GoalsItem.scss';

interface GoalsItemProps {
  index: number;
  goal: string;
}

export default function GoalsItem({ index, goal }: GoalsItemProps) {
  return (
    <motion.div variants={imageAnimation} custom={1} className="home-goals__item">
      <span className="home-goals__item_index">{index}</span>
      <BigArticleText>{goal}</BigArticleText>
    </motion.div>
  );
}
