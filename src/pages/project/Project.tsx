import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProjectStore } from '../../store/project-store';
import Error from '../error/Error';
import Loader from '../../components/loader/Loader';
import ProjectWrapper from './components/project-wrapper/ProjectWrapper';

export default function Project() {
  const { id } = useParams();
  const { loading, fetchData, resetData } = useProjectStore((store) => store);

  useEffect(() => {
    fetchData(id);

    return () => {
      resetData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <main className="wrapper">
      {loading === 'error' && <Error />}
      {loading === 'loading' && <Loader />}
      {loading === 'succeeded' && <ProjectWrapper />}
    </main>
  );
}
