import React from 'react';

import Header from '../components/header/Header';
import AppRouter from '../components/app-router/AppRouter';
import Footer from '../components/footer/Footer';

import './App.scss';

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
