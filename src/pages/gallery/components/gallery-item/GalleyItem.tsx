import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { GalleryType } from '../../../../types/types';

import LazyImg from '../../../../ui/images/LazyImg';

import './GalleryItem.scss';

const GalleyItem = forwardRef<HTMLDivElement, GalleryType>(({ id, image }, ref) => (
  <div ref={ref} className="gallery__item">
    <LazyImg src={image} alt={`${id}`} className="gallery__item_photo" />
  </div>
));

export const MGalleryItem = motion(GalleyItem);
