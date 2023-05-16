import React from 'react';

import ArticleHeading from '../../../../../ui/headings/article-heading/ArticleHeading';
import SmallArticleText from '../../../../../ui/text/small-article-text/SmallArticleText';
import WhiteThickLink from '../../../../../ui/links/white-thick-link/WhiteThickLink';

import './ProjectItemText.scss';

interface ProjectItemTextProps {
  id: number;
  name: string;
  description: string;
}

export default function ProjectItemText({ id, name, description }: ProjectItemTextProps) {
  return (
    <div className="project__item_text">
      <ArticleHeading>{name}</ArticleHeading>
      <SmallArticleText>{description}</SmallArticleText>
      <WhiteThickLink to={`/project/${id}`}>Смотреть</WhiteThickLink>
    </div>
  );
}
