import React, { useEffect } from 'react';
import { useGalleryStore } from '../../store/gallery-store';

import GalleryWrapper from './components/gallery-wrapper/GalleryWrapper';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

export default function Gallery() {
  const loading = useGalleryStore((state) => state.loading);
  const fetchData = useGalleryStore((state) => state.fetchData);

  useEffect(() => {
    if (loading === 'idle') fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  return (
    <main className="wrapper">
      {loading === 'loading' && <Loader />}
      {loading === 'error' && <Error />}
      {loading === 'succeeded' && <GalleryWrapper />}
    </main>
  );
}
