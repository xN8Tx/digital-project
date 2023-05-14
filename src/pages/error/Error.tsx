import React from 'react';

import ErrorWrapper from '../../components/error/error-wrapper/ErrorWrapper';

import './Error.scss';

export default function Error() {
  return (
    <section className="error">
      <ErrorWrapper code={404} message="Такой страницы не существует" />
    </section>
  );
}
