import React from 'react';

import ProjectList from '../projects-list/ProjectList';
import LightSectionHeading from '../../../../../ui/headings/light-section-heading/LightSectionHeading';
import DarkThickLink from '../../../../../ui/links/dark-thick-link/DarkThickLink';

export default function ProjectsWrapper() {
  return (
    <div className="home-section">
      <LightSectionHeading>Наши проекты</LightSectionHeading>
      <ProjectList />
      <DarkThickLink to="/projects">Все проекты</DarkThickLink>
    </div>
  );
}
