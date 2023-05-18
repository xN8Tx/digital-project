import React from 'react';
import { motion } from 'framer-motion';
import { useProjectStore } from '../../../../store/project-store';

import PageArticle from '../../../../components/page-article/PageArticle';
import ProjectCover from '../project-cover/ProjectCover';
import ProjectText from '../project-text/ProjectText';

import './ProjectWrapper.scss';

export default function ProjectWrapper() {
  const entities = useProjectStore((store) => store.entities);

  const firstWord: string = entities.name.split(' ').shift()!;
  const secondWord: string = entities.name.split(' ').pop()!;

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="project__wrapper">
      <PageArticle firstWord={firstWord} secondWord={secondWord} />
      <ProjectCover />
      <ProjectText />
    </motion.section>
  );
}
