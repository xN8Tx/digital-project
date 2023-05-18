import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import WhiteSectionHeading from '../../../../../ui/headings/white-section-heading/WhiteSectionHeading';
import WhiteSmallLink from '../../../../../ui/links/white-small-link/WhiteSmallLink';

import './ProjectItem.scss';
import LazyImg from '../../../../../ui/images/LazyImg';

interface ProjectItemProps {
  id: number;
  name: string;
  image: string;
}

const ProjectItem = forwardRef<HTMLDivElement, ProjectItemProps>(({ id, name, image }, ref) => (
  <div ref={ref} className="home-projects__item">
    <LazyImg src={image} alt="project" className="home-projects__item_image" />
    <div className="home-projects__item_text">
      <WhiteSectionHeading>{name}</WhiteSectionHeading>
      <WhiteSmallLink to={`/project/${id}`}>Подробнее</WhiteSmallLink>
    </div>
  </div>
));

export const MProjectItem = motion(ProjectItem);
