import React from 'react';
import { useProjectStore } from '../../../../store/project-store';

import SmallArticleText from '../../../../ui/text/small-article-text/SmallArticleText';

import './ProjectText.scss';

export default function ProjectText() {
  const { description, imageSecond } = useProjectStore((store) => store.entities);

  return (
    <div className="project__text">
      <img src={imageSecond} alt="" className="project__text_photo" />
      <SmallArticleText>{description}</SmallArticleText>
    </div>
  );
}
