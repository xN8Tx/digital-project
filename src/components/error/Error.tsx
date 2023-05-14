import React from 'react';

import ErrorWrapper from './error-wrapper/ErrorWrapper';

import './Error.scss';

export default function Error() {
  return (
    <section className="error">
      <ErrorWrapper code={500} message="Произошла ошибка, скоро мы ее исправим" />
    </section>
  );
}
