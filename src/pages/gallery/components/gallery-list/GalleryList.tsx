import React from 'react';
import { useGalleryStore } from '../../../../store/gallery-store';

import GalleyItem from '../gallery-item/GalleyItem';

import './GalleryList.scss';

export default function GalleryList() {
  const gallery = useGalleryStore((state) => state.entities);
  const currentPage = useGalleryStore((state) => state.currentPage);
  const qntSlides = useGalleryStore((state) => state.qntSlides);

  let count = 0;

  return (
    <div className="gallery__list">
      {gallery.map((photo, index) => {
        if (count < qntSlides && (currentPage - 1) * qntSlides <= index) {
          count += 1;
          return (
            <div key={photo.id} className="gallery__list_row">
              <GalleyItem id={photo.id} image={photo.image} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
