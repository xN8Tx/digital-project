import React from 'react';

import Certificate from '../pages/certificate';
import Contacts from '../pages/contacts';
import Error from '../pages/error';
import Gallery from '../pages/gallery';
import Home from '../pages/home';
import Project from '../pages/project';
import Projects from '../pages/projects';

interface IRoutes {
  name: string,
  path: string,
  element: JSX.Element,
  isShowed: boolean,
}

const routes:IRoutes[] = [
  {
    name: 'Главная', path: '/', element: <Home />, isShowed: true,
  },
  {
    name: 'Галерея', path: '/gallery', element: <Gallery />, isShowed: true,
  },
  {
    name: 'Проекты', path: '/projects', element: <Projects />, isShowed: true,
  },
  {
    name: 'Сертификаты', path: '/certificates', element: <Certificate />, isShowed: true,
  },
  {
    name: 'Контакты', path: '/contacts', element: <Contacts />, isShowed: true,
  },

  {
    name: 'Проект', path: '/projects/*', element: <Project />, isShowed: false,
  },
  {
    name: 'Ошибка', path: '*', element: <Error />, isShowed: false,
  },
];

export { routes };
