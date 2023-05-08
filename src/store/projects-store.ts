import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { loadingObserver } from '../api/api';
import { ProjectType, StoreType } from '../types/types';

const useProjectsStore = create<StoreType<ProjectType[]>>()(
  devtools((set) => ({
    entities: [],
    loading: 'idle',
    fetchData: (page) => {
      loadingObserver<ProjectType[]>(set, `projects?page=${page}&limit=5`);
    },
  })),
);

export { useProjectsStore };
