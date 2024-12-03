import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearch: (search: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));

export default useGameQueryStore;
