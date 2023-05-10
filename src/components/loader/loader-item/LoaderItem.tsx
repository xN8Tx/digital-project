import React from 'react';

import './LoaderItem.scss';

export default function LoaderItem() {
  return (
    <div className="loader__wrapper">
      <span className="loader__item first" />
      <span className="loader__item second" />
      <span className="loader__item third" />
      <span className="loader__item fourth" />
    </div>
  );
}
