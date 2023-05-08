import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ProjectType, StoreType } from '../types/types';
import { loadingObserver } from '../api/api';

const initialEntities = {
  id: 0,
  name: '',
  description: '',
  imageFirst: '',
  imageSecond: '',
};

interface ProjectStore extends StoreType<ProjectType> {
  resetData: () => void;
}

const useProjectStore = create<ProjectStore>()(
  devtools((set) => ({
    entities: initialEntities,
    loading: 'idle',
    fetchData: (id) => {
      loadingObserver<ProjectType>(set, `projects/${id}`);
    },
    resetData: () => {
      set({ loading: 'idle', entities: initialEntities });
    },
  })),
);

export { useProjectStore };
