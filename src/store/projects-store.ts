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
    setCurrentPage: (newPage) => {
      const { qntSlides, entities, fetchData } = get();

      // eslint-disable-next-line no-param-reassign
      if (newPage === 0) newPage = 1;

      set({ currentPage: newPage });

      if (entities.length < qntSlides * newPage) {
        fetchData();
      }
    },
    qntSlides: 5,
  })),
);

export { useProjectsStore };
