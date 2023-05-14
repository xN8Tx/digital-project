import React from 'react';

import { useGalleryStore } from '../../../../store/gallery-store';

import PageArticle from '../../../../components/page-article/PageArticle';
import GalleryList from '../gallery-list/GalleryList';
import SliderControllers from '../../../../components/slider/slider-controllers/SliderControllers';

import './GalleryWrapper.scss';

export default function GalleryWrapper() {
  const maxPage = useGalleryStore((state) => state.maxPage);
  const currentPage = useGalleryStore((state) => state.currentPage);
  const setCurrentPage = useGalleryStore((state) => state.setCurrentPage);

  return (
    <div className="gallery__wrapper">
      <PageArticle firstWord="Галерея" secondWord="фотографий" />
      <GalleryList />
      <SliderControllers maxIndex={maxPage} currentIndex={currentPage} setCurrentIndex={setCurrentPage} />
    </div>
  );
}
