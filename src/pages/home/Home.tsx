import React, { useEffect } from 'react';
import { useProjectsStore } from '../../store/projects-store';

import Concept from './components/concept/Concept';
import AboutUs from './components/about-us/AboutUs';
import Goals from './components/goals/Goals';
import Projects from './components/projects/Projects';
import ContactUs from './components/contact-us/ContactUs';

import './Home.scss';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

export default function Home() {
  const loading = useProjectsStore((state) => state.loading);
  const fetchProjects = useProjectsStore((state) => state.fetchData);

  useEffect(() => {
    if (loading === 'idle') fetchProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProjects]);

  return (
    <main>
      {loading === 'loading' && <Loader />}
      {loading === 'error' && <Error />}
      {loading === 'succeeded' && (
        <div className="wrapper">
          <Concept />
          <AboutUs />
          <Goals />
          <Projects />
          <ContactUs />
        </div>
      )}
    </main>
  );
}
