import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Context } from './context/context';

import App from './app/App';

import './index.scss';
import ScrollToTop from './utils/scroll-to-top';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Context.Provider value={{ clientWidth: window.innerWidth }}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Context.Provider>,
);
