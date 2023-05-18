import React from 'react';
import { Link } from 'react-router-dom';

import LazyImg from '../../../../../ui/images/LazyImg';

import './ProjectItemImage.scss';

interface ProjectItemImageProps {
  id: number;
  src: string;
}

export default function ProjectItemImage({ id, src }: ProjectItemImageProps) {
  return (
    <Link to={`/project/${id}`} className="project__item_container">
      <LazyImg src={src} alt={`${id}`} className="project__item_image" />
    </Link>
  );
}
