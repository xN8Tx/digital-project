import React from 'react';
import { GalleryType } from '../../../../types/types';

import './GalleryItem.scss';

export default function GalleyItem({ id, image }: GalleryType) {
  return (
    <div className="gallery__item">
      <img src={image} alt={`${id}`} className="gallery__item_photo" />
    </div>
  );
}
