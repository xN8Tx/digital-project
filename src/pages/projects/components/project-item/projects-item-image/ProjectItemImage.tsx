import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectItemImage.scss';

interface ProjectItemImageProps {
  id: number;
  src: string;
}

export default function ProjectItemImage({ id, src }: ProjectItemImageProps) {
  return (
    <Link to={`/project/${id}`} className="project__item_image">
      <img src={src} alt="" />
    </Link>
  );
}
