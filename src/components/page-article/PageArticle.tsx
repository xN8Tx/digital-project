import React from 'react';

import LightSectionHeading from '../../ui/headings/light-section-heading/LightSectionHeading';
import DarkSectionHeading from '../../ui/headings/dark-section-heading/DarkSectionHeading';

import './PageArticle.scss';

interface PageArticleProps {
  firstWord: string;
  secondWord: string;
}

export default function PageArticle({ firstWord, secondWord }: PageArticleProps) {
  return (
    <div className="page-article">
      <LightSectionHeading>{firstWord}</LightSectionHeading>
      <DarkSectionHeading>{secondWord}</DarkSectionHeading>
    </div>
  );
}
