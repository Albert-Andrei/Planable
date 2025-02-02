import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (txt: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",

  setSearch: (txt: string) =>
    set(() => {
      return {
        search: txt,
      };
    }),
}));
