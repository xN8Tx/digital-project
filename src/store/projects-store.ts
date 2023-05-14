import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { http, loadingObserver } from '../api/api';
import { ProjectType, StoreWithPagination } from '../types/types';

const useProjectsStore = create<StoreWithPagination<ProjectType[]>>()(
  devtools((set, get) => ({
    entities: [],
    loading: 'idle',
    fetchData: () => {
      const fetchData = async () => {
        const page = get().currentPage;
        const data = await http<ProjectType[]>(`projects?page=${page}&limit=5`);

        set((state) => ({ entities: [...state.entities, ...data], loading: 'succeeded' }));
      };

      loadingObserver(set, fetchData);
    },
    maxPage: 3,
    currentPage: 1,
    setCurrentPage: (currentPage) => {
      set({ currentPage });
    },
    qntSlides: 5,
  })),
);

export { useProjectsStore };
