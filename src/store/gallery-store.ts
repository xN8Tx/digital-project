import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { GalleryType, StoreWithPagination } from '../types/types';
import { http, loadingObserver } from '../api/api';

const useGalleryStore = create<StoreWithPagination<GalleryType[]>>()(
  devtools((set, get) => ({
    entities: [],
    loading: 'idle',
    fetchData: () => {
      const fetchData = async () => {
        const { currentPage, qntSlides } = get();

        const data = await http<GalleryType[]>(`gallery?page=${currentPage}&limit=${qntSlides}`);

        set((state) => ({ entities: [...state.entities, ...data], loading: 'succeeded' }));
      };

      loadingObserver(set, fetchData);
    },
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
    maxPage: 4,
    qntSlides: 10,
  })),
);

export { useGalleryStore };
