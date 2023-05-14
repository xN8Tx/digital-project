import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ProjectType, StoreType } from '../types/types';
import { http, loadingObserver } from '../api/api';

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
      const fetchData = async () => {
        const data = await http<ProjectType>(`projects/${id}`);

        set({ entities: data, loading: 'succeeded' });
      };

      loadingObserver(set, fetchData);
    },
    resetData: () => {
      set({ loading: 'idle', entities: initialEntities });
    },
  })),
);

export { useProjectStore };
