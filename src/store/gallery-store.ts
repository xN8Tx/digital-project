import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { GalleryType, StoreType } from '../types/types';
import { loadingObserver } from '../api/api';

const useGalleryStore = create<StoreType<GalleryType[]>>()(
  devtools((set) => ({
    entities: [],
    loading: 'idle',
    fetchData: (page) => {
      loadingObserver<GalleryType[]>(set, `gallery?page=${page}&limit=5`);
    },
  })),
);

export { useGalleryStore };
