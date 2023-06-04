import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IPhoto {
  description: string;
  url: string;
  title: string;
  user: number;
  id: number;
}

interface Store {
  user: string | null;
  photos: IPhoto[];
  photo: IPhoto | null;
  setUser: (user: string | null) => void;
  addPhotos: (photos: IPhoto[]) => void;
  addPhoto: (photos: IPhoto) => void;
}

export const usePhotos = create<Store>()(
  persist<Store>(
    (set) => ({
      user: null,
      photos: [],
      photo: null,
      setUser: (user: string | null) => set(() => ({ user })),
      addPhotos: (photos: IPhoto[]) => set(() => ({ photos })),
      addPhoto: (photo: IPhoto) => set(() => ({ photo })),
    }),
    {
      name: "app-photo",
    }
  )
);
