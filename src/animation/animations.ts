import { Variants } from 'framer-motion';

const textAnimation: Variants = {
  hidden: () => ({
    x: -100,
    opacity: 0,
  }),
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const imageAnimation: Variants = {
  hidden: () => ({
    y: 100,
    opacity: 0,
  }),
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, ease: 'linear' },
  }),
};

export { textAnimation, imageAnimation };
