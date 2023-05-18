import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { MArticleHeading } from '../../../../../ui/headings/article-heading/ArticleHeading';
import { MSmallArticleText } from '../../../../../ui/text/small-article-text/SmallArticleText';
import WhiteThickLink from '../../../../../ui/links/white-thick-link/WhiteThickLink';

import './ProjectItemText.scss';
import { textAnimation } from '../../../../../animation/animations';

interface ProjectItemTextProps {
  id: number;
  name: string;
  description: string;
}

const ProjectItemText = forwardRef<HTMLDivElement, ProjectItemTextProps>(({ id, name, description }, ref) => (
  <div ref={ref} className="project__item_text">
    <MArticleHeading variants={textAnimation} custom={0.5}>
      {name}
    </MArticleHeading>
    <MSmallArticleText variants={textAnimation} custom={1}>
      {description}
    </MSmallArticleText>
    <WhiteThickLink to={`/project/${id}`}>Смотреть</WhiteThickLink>
  </div>
));

export const MProjectItemText = motion(ProjectItemText);
