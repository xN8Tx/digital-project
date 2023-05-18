import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { imageAnimation } from '../../../../animation/animations';

import './ContactsMap.scss';

export default function ContactsMap() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const onIframeLoaded = () => setIsLoaded(true);

  return (
    <motion.div variants={imageAnimation} custom={2} className="contacts__map" data-load={isLoaded}>
      <iframe
        title="map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A05f3bc49eed2dfbc1a2d865db34f9750814d28f3e0f7fcca76d3faec4fc6b560&amp;source=constructor"
        className="contacts__map_iframe"
        onLoad={onIframeLoaded}
      />
    </motion.div>
  );
}
