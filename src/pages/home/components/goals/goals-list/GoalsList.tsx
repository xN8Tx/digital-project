import React from 'react';

import GoalsItem from '../goals-item/GoalsItem';

import './GoalsList.scss';

export default function GoalsList() {
  const goals: string[] = [
    'Создание комфортных условий и повышение качества обслуживания клиентов',
    'Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала',
  ];

  return (
    <div className="home-goals__list">
      {goals.map((goal, index) => (
        <GoalsItem goal={goal} index={index + 1} />
      ))}
    </div>
  );
}
