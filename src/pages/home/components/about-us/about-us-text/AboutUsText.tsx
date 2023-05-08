import React from 'react';

import LightSectionHeading from '../../../../../ui/headings/light-section-heading/LightSectionHeading';
import SmallArticleText from '../../../../../ui/text/small-article-text/SmallArticleText';
import DarkThickLink from '../../../../../ui/links/dark-thick-link/DarkThickLink';

import './AboutUsText.scss';

export default function AboutUsText() {
  return (
    <div className="home-about-us__text">
      <LightSectionHeading>О компании</LightSectionHeading>
      <SmallArticleText>
        Наша компания занимается созданием инновационных и современных архитектурных проектов, которые вписываются в
        контекст современного общества. Мы предлагаем полный цикл услуг - от концепта до реализации проекта. Наши
        специалисты всегда внимательны к потребностям и требованиям наших клиентов и стремятся создать уникальный,
        функциональный и эстетичный дизайн, который будет соответствовать всем требованиям и ожиданиям клиента. Наше
        видение зданий и пространств - это гармоничное сочетание высоких технологий и прекрасного дизайна, которые
        делают жизнь людей лучше, удобнее и комфортнее.
      </SmallArticleText>
      <DarkThickLink to="/contact">Читать</DarkThickLink>
    </div>
  );
}
