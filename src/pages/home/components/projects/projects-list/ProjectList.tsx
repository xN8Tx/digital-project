import React from 'react';
import { useProjectsStore } from '../../../../../store/projects-store';

import ProjectItem from '../projects-item/ProjectItem';

import './ProjectList.scss';

export default function ProjectList() {
  const projects = useProjectsStore((state) => state.entities);

  return (
    <div className="home-project__list">
      {projects.map((project, index) => {
        if (index <= 3)
          return <ProjectItem key={project.id} id={project.id} name={project.name} image={project.imageFirst} />;
        return null;
      })}
    </div>
  );
}
