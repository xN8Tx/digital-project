import React from 'react';
import { motion } from 'framer-motion';

import { MProjectItemImage } from './projects-item-image/ProjectItemImage';
import { MProjectItemText } from './project-item-text/ProjectItemText';

import './ProjectItem.scss';
import { imageAnimation, textAnimation } from '../../../../animation/animations';

interface ProjectsItemProps {
  id: number;
  name: string;
  description: string;
  src: string;
}

export default function ProjectsItem({ id, name, description, src }: ProjectsItemProps) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="project_item">
      <MProjectItemImage id={id} src={src} variants={imageAnimation} custom={1} />
      <MProjectItemText id={id} name={name} description={description} variants={textAnimation} custom={1} />
    </motion.div>
  );
}
