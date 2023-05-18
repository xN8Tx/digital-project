import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import LazyImg from '../../../../../ui/images/LazyImg';

import './ProjectItemImage.scss';

interface ProjectItemImageProps {
  id: number;
  src: string;
}

const ProjectItemImage = forwardRef<HTMLAnchorElement, ProjectItemImageProps>(({ id, src }, ref) => (
  <Link ref={ref} to={`/project/${id}`} className="project__item_container">
    <LazyImg src={src} alt={`${id}`} className="project__item_image" />
  </Link>
));

export const MProjectItemImage = motion(ProjectItemImage);
