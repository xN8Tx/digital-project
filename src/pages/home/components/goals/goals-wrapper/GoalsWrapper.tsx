import React from 'react';

import LightSectionHeading from '../../../../../ui/headings/light-section-heading/LightSectionHeading';

import './GoalsWrapper.scss';
import GoalsList from '../goals-list/GoalsList';

export default function GoalsWrapper() {
  return (
    <div className="home-section">
      <LightSectionHeading>Наши цели</LightSectionHeading>
      <GoalsList />
    </div>
  );
}
