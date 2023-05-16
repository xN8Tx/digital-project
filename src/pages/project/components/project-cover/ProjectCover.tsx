import React from 'react';
import { useProjectStore } from '../../../../store/project-store';

import './ProjectCover.scss';

export default function ProjectCover() {
  const imageFirst = useProjectStore((state) => state.entities.imageFirst);

  return (
    <div className="project__cover">
      <img src={imageFirst} alt="" />
    </div>
  );
}
