import React, { useEffect } from 'react';
import { useProjectStore } from '../../store/project-store';

export default function Home() {
  const entities = useProjectStore((state) => state.entities);
  const loading = useProjectStore((state) => state.loading);
  const fetchProjects = useProjectStore((state) => state.fetchData);

  useEffect(() => {
    if (loading === 'idle') fetchProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProjects]);

  return <div>{loading === 'succeeded' && <p>{entities.name}</p>}</div>;
}
