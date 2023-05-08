import React from 'react';

import WhiteThickLink from '../../../../../ui/links/white-thick-link/WhiteThickLink';

interface SliderImageItemProps {
  src: string;
  id: number;
  status: boolean;
}

export default function SliderImageItem({ src, id, status }: SliderImageItemProps) {
  return (
    <>
      <img src={src} alt="slider" className="home-slider__image_img" data-active={status} />
      <WhiteThickLink to={`/project/${id}`} data-active={status}>
        Взглянуть
      </WhiteThickLink>
    </>
  );
}
