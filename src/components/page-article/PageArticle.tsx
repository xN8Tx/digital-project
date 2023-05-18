import React from 'react';

import { MLightSectionHeading } from '../../ui/headings/light-section-heading/LightSectionHeading';
import { MDarkSectionHeading } from '../../ui/headings/dark-section-heading/DarkSectionHeading';

import './PageArticle.scss';
import { textAnimation } from '../../animation/animations';

interface PageArticleProps {
  firstWord: string;
  secondWord: string;
}

export default function PageArticle({ firstWord, secondWord }: PageArticleProps) {
  return (
    <div className="page-article">
      <MLightSectionHeading variants={textAnimation} custom={0.5}>
        {firstWord}
      </MLightSectionHeading>
      <MDarkSectionHeading variants={textAnimation} custom={1}>
        {secondWord}
      </MDarkSectionHeading>
    </div>
  );
}
