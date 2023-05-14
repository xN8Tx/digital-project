import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { http, loadingObserver } from '../api/api';
import { ProjectType, StoreType } from '../types/types';

const useHomeStore = create<StoreType<ProjectType[]>>()(
  devtools((set) => ({
    entities: [],
    loading: 'idle',
    fetchData: () => {
      const fetchData = async () => {
        const page = 1;
        const data = await http<ProjectType[]>(`projects?page=${page}&limit=5`);

        set({ entities: data, loading: 'succeeded' });
      };

      loadingObserver(set, fetchData);
    },
  })),
);

export { useHomeStore };
