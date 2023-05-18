import React from 'react';
import { motion } from 'framer-motion';

import ProjectList from '../projects-list/ProjectList';
import { MLightSectionHeading } from '../../../../../ui/headings/light-section-heading/LightSectionHeading';
import { MDarkThickLink } from '../../../../../ui/links/dark-thick-link/DarkThickLink';
import { textAnimation } from '../../../../../animation/animations';

export default function ProjectsWrapper() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.5, once: true }} className="home-section">
      <MLightSectionHeading variants={textAnimation}>Наши проекты</MLightSectionHeading>
      <ProjectList />
      <MDarkThickLink to="/projects" variants={textAnimation}>
        Все проекты
      </MDarkThickLink>
    </motion.div>
  );
}
