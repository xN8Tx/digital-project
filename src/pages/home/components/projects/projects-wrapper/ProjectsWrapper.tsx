import React from 'react';

import ProjectList from '../projects-list/ProjectList';
import LightSectionHeading from '../../../../../ui/headings/light-section-heading/LightSectionHeading';

export default function ProjectsWrapper() {
  return (
    <div className="home-section">
      <LightSectionHeading>Наши проекты</LightSectionHeading>
      <ProjectList />
    </div>
  );
}
