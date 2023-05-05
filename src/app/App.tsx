import React from 'react';

import Header from '../components/header';
import AppRouter from '../components/app-router/AppRouter';

import './App.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <AppRouter />
    </main>
  );
}

export default App;
