import React, { useEffect } from 'react';

import { useHomeStore } from '../../store/home-store';

import Concept from './components/concept/Concept';
import AboutUs from './components/about-us/AboutUs';
import Goals from './components/goals/Goals';
import Projects from './components/projects/Projects';
import ContactUs from './components/contact-us/ContactUs';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

import './Home.scss';

export default function Home() {
  const loading = useHomeStore((state) => state.loading);
  const fetchProjects = useHomeStore((state) => state.fetchData);

  useEffect(() => {
    if (loading === 'idle') fetchProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProjects]);

  return (
    <main className="wrapper">
      {loading === 'loading' && <Loader />}
      {loading === 'error' && <Error />}
      {loading === 'succeeded' && (
        <>
          <Concept />
          <AboutUs />
          <Goals />
          <Projects />
          <ContactUs />
        </>
      )}
    </main>
  );
}
