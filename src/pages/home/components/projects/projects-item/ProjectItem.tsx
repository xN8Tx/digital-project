import React from 'react';

import WhiteSectionHeading from '../../../../../ui/headings/white-section-heading/WhiteSectionHeading';
import WhiteSmallLink from '../../../../../ui/links/white-small-link/WhiteSmallLink';

import './ProjectItem.scss';

interface ProjectItemProps {
  id: number;
  name: string;
  image: string;
}

export default function ProjectItem({ id, name, image }: ProjectItemProps) {
  return (
    <div className="home-projects__item">
      <img src={image} alt="project" className="home-projects__item_image" />
      <div className="home-projects__item_text">
        <WhiteSectionHeading>{name}</WhiteSectionHeading>
        <WhiteSmallLink to={`/project/${id}`}>Подробнее</WhiteSmallLink>
      </div>
    </div>
  );
}
