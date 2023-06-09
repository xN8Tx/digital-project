import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '../components/header/Header';
import AppRouter from '../components/app-router/AppRouter';
import Footer from '../components/footer/Footer';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <ToastContainer />
    </>
  );
}
