import React from 'react';
import { GalleryType } from '../../../../types/types';

import './GalleryItem.scss';
import LazyImg from '../../../../ui/images/LazyImg';

export default function GalleyItem({ id, image }: GalleryType) {
  return (
    <div className="gallery__item">
      <LazyImg src={image} alt={`${id}`} className="gallery__item_photo" />
    </div>
  );
}
