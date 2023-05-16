import React from 'react';
import { useProjectsStore } from '../../../../store/projects-store';

import ProjectsItem from '../project-item/ProjectsItem';

import './ProjectsList.scss';

export default function ProjectsList() {
  const entities = useProjectsStore((store) => store.entities);
  const currentPage = useProjectsStore((state) => state.currentPage);
  const qntSlides = useProjectsStore((state) => state.qntSlides);

  let count = 0;

  return (
    <section className="projects__list">
      {entities.map((project, index) => {
        if (count < qntSlides && (currentPage - 1) * qntSlides <= index) {
          count += 1;
          return (
            <ProjectsItem
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              src={project.imageFirst}
            />
          );
        }
        return null;
      })}
    </section>
  );
}
