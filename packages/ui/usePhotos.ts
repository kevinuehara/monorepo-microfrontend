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
  setUser: (user: string | null) => void;
  addPhotos: (photos: IPhoto[]) => void;
}

export const usePhotos = create<Store>()(
  persist<Store>(
    (set) => ({
      user: null,
      photos: [],
      setUser: (user: string | null) => set(() => ({ user })),
      addPhotos: (photos: IPhoto[]) => set(() => ({ photos })),
    }),
    {
      name: "app-photo",
    }
  )
);
