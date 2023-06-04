import * as React from 'react';
import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';

declare const CustomHeader: React.FC<React.PropsWithChildren<{
    title: string;
}>>;

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
declare const usePhotos: zustand.UseBoundStore<Omit<zustand.StoreApi<Store>, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<Store, Store>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
        getOptions: () => Partial<zustand_middleware.PersistOptions<Store, Store>>;
    };
}>;

export { CustomHeader, usePhotos };
