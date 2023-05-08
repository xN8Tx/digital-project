import React from 'react';

import BigArticleText from '../../../../../ui/text/big-article-text/BigArticleText';

import './GoalsItem.scss';

interface GoalsItemProps {
  index: number;
  goal: string;
}

export default function GoalsItem({ index, goal }: GoalsItemProps) {
  return (
    <div className="home-goals__item">
      <span className="home-goals__item_index">{index}</span>
      <BigArticleText>{goal}</BigArticleText>
    </div>
  );
}
