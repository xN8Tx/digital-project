import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../../routes/routes';

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
