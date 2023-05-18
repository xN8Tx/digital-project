import React, { useState } from 'react';

import style from './LazyImg.module.scss';

interface LazyImgProps {
  src: string;
  alt: string;
  className: string;
}

// eslint-disable-next-line react/prop-types
export default function LazyImg({ src, alt, className, ...props }: LazyImgProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const onImgLoaded = () => setIsLoaded(true);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={`${className} ${style.container}`} data-load={isLoaded} {...props}>
      <img src={src} alt={alt} className={style.image} onLoad={onImgLoaded} />
    </div>
  );
}
