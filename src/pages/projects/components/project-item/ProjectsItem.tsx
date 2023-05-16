import React from 'react';

import ProjectItemImage from './projects-item-image/ProjectItemImage';
import ProjectItemText from './project-item-text/ProjectItemText';

import './ProjectItem.scss';

interface ProjectsItemProps {
  id: number;
  name: string;
  description: string;
  src: string;
}

export default function ProjectsItem({ id, name, description, src }: ProjectsItemProps) {
  return (
    <div className="project_item">
      <ProjectItemImage id={id} src={src} />
      <ProjectItemText id={id} name={name} description={description} />
    </div>
  );
}
