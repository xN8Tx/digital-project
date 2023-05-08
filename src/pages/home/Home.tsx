import React, { useEffect } from 'react';
import { useProjectsStore } from '../../store/projects-store';

import Concept from './components/concept/Concept';

export default function Home() {
  const loading = useProjectsStore((state) => state.loading);
  const fetchProjects = useProjectsStore((state) => state.fetchData);

  useEffect(() => {
    if (loading === 'idle') fetchProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProjects]);

  return (
    <main>
      <div className="wrapper">{loading === 'succeeded' && <Concept />}</div>
    </main>
  );
}
