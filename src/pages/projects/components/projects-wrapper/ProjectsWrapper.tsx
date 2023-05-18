import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { useProjectsStore } from '../../../../store/projects-store';

import PageArticle from '../../../../components/page-article/PageArticle';
import ProjectsList from '../projects-list/ProjectsList';
import SliderControllers from '../../../../components/slider/slider-controllers/SliderControllers';

import './ProjectsWrapper.scss';

export default function ProjectsWrapper() {
  const maxPage = useProjectsStore((state) => state.maxPage);
  const currentPage = useProjectsStore((state) => state.currentPage);
  const setCurrentPage = useProjectsStore((state) => state.setCurrentPage);

  useEffect(() => {
    document.querySelector('body')?.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="projects__wrapper">
      <PageArticle firstWord="Наши" secondWord="проекты" />
      <ProjectsList />
      <SliderControllers maxIndex={maxPage} currentIndex={currentPage} setCurrentIndex={setCurrentPage} />
    </motion.section>
  );
}
