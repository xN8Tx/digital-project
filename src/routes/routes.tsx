import React from 'react';

import Certificate from '../pages/certificate/Certificate';
import Contacts from '../pages/contacts/Contacts';
import Error from '../pages/error/Error';
import Gallery from '../pages/gallery/Gallery';
import Home from '../pages/home/Home';
import Project from '../pages/project/Project';
import Projects from '../pages/projects/Projects';

interface IRoutes {
  name: string;
  path: string;
  element: JSX.Element;
  isShowed: boolean;
}

const routes: IRoutes[] = [
  {
    name: 'Главная',
    path: '/',
    element: <Home />,
    isShowed: true,
  },
  {
    name: 'Галерея',
    path: '/gallery',
    element: <Gallery />,
    isShowed: true,
  },
  {
    name: 'Проекты',
    path: '/projects',
    element: <Projects />,
    isShowed: true,
  },
  {
    name: 'Сертификаты',
    path: '/certificates',
    element: <Certificate />,
    isShowed: true,
  },
  {
    name: 'Контакты',
    path: '/contacts',
    element: <Contacts />,
    isShowed: true,
  },

  {
    name: 'Проект',
    path: '/project/:id',
    element: <Project />,
    isShowed: false,
  },
  {
    name: 'Ошибка',
    path: '*',
    element: <Error />,
    isShowed: false,
  },
];

export { routes };
