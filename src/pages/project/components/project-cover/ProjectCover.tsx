import React from 'react';
import { useProjectStore } from '../../../../store/project-store';

import LazyImg from '../../../../ui/images/LazyImg';

import './ProjectCover.scss';

export default function ProjectCover() {
  const imageFirst = useProjectStore((state) => state.entities.imageFirst);

  return (
    <div className="project__cover">
      <LazyImg src={imageFirst} alt="Обложка" className="project__cover_image" />
    </div>
  );
}
