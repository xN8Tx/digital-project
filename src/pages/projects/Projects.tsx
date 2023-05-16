import React, { useEffect } from 'react';
import { useProjectsStore } from '../../store/projects-store';

import Error from '../../components/error/Error';
import Loader from '../../components/loader/Loader';
import ProjectsWrapper from './components/projects-wrapper/ProjectsWrapper';

export default function Projects() {
  const loading = useProjectsStore((state) => state.loading);
  const fetchProjects = useProjectsStore((state) => state.fetchData);

  useEffect(() => {
    if (loading === 'idle') fetchProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProjects]);

  return (
    <main className="wrapper">
      {loading === 'loading' && <Loader />}
      {loading === 'error' && <Error />}
      {loading === 'succeeded' && <ProjectsWrapper />}
    </main>
  );
}
