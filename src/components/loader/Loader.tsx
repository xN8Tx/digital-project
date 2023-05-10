import React from 'react';

import LoaderItem from './loader-item/LoaderItem';

import './Loader.scss';

export default function Loader() {
  return (
    <section className="loader">
      <LoaderItem />
    </section>
  );
}
