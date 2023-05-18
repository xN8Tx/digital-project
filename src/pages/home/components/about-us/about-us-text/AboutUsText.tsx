import React from 'react';

import { MLightSectionHeading } from '../../../../../ui/headings/light-section-heading/LightSectionHeading';
import { MSmallArticleText } from '../../../../../ui/text/small-article-text/SmallArticleText';
import { MDarkThickLink } from '../../../../../ui/links/dark-thick-link/DarkThickLink';

import './AboutUsText.scss';
import { imageAnimation, textAnimation } from '../../../../../animation/animations';

export default function AboutUsText() {
  return (
    <div className="home-about-us__text">
      <MLightSectionHeading variants={textAnimation} custom={1}>
        О компании
      </MLightSectionHeading>
      <MSmallArticleText variants={imageAnimation} custom={2}>
        Наша компания занимается созданием инновационных и современных архитектурных проектов, которые вписываются в
        контекст современного общества. Мы предлагаем полный цикл услуг - от концепта до реализации проекта. Наши
        специалисты всегда внимательны к потребностям и требованиям наших клиентов и стремятся создать уникальный,
        функциональный и эстетичный дизайн, который будет соответствовать всем требованиям и ожиданиям клиента. Наше
        видение зданий и пространств - это гармоничное сочетание высоких технологий и прекрасного дизайна, которые
        делают жизнь людей лучше, удобнее и комфортнее.
      </MSmallArticleText>
      <MDarkThickLink to="/contact" variants={imageAnimation} custom={2}>
        Читать
      </MDarkThickLink>
    </div>
  );
}
