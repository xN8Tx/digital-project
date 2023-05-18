import React from 'react';
import { motion } from 'framer-motion';
import { useProjectStore } from '../../../../store/project-store';

import { imageAnimation, textAnimation } from '../../../../animation/animations';

import { MSmallArticleText } from '../../../../ui/text/small-article-text/SmallArticleText';
import LazyImg from '../../../../ui/images/LazyImg';

import './ProjectText.scss';

export default function ProjectText() {
  const { description, imageSecond } = useProjectStore((store) => store.entities);

  return (
    <div className="project__text">
      <motion.div variants={imageAnimation} custom={2}>
        <LazyImg src={imageSecond} alt="" className="project__text_photo" />
      </motion.div>
      <MSmallArticleText variants={textAnimation} custom={2}>
        {description}
      </MSmallArticleText>
    </div>
  );
}
