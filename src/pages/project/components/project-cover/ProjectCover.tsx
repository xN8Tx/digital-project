import React from 'react';
import { motion } from 'framer-motion';
import { useProjectStore } from '../../../../store/project-store';

import LazyImg from '../../../../ui/images/LazyImg';

import './ProjectCover.scss';
import { imageAnimation } from '../../../../animation/animations';

export default function ProjectCover() {
  const imageFirst = useProjectStore((state) => state.entities.imageFirst);

  return (
    <motion.div variants={imageAnimation} custom={1} className="project__cover">
      <LazyImg src={imageFirst} alt="Обложка" className="project__cover_image" />
    </motion.div>
  );
}
