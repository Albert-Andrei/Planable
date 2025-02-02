import { create } from "zustand";

type MediaCount = {
  total: number;
  image: number;
  video: number;
  gif: number;
};

type CountStore = {
  mediaCounts: MediaCount;
  updateMediaCount: (mediaCounts: MediaCount) => void;
};

export const useMediaCountStore = create<CountStore>((set) => ({
  mediaCounts: {
    total: 0,
    image: 0,
    video: 0,
    gif: 0,
  },

  updateMediaCount: (mediaCounts: MediaCount) =>
    set(() => {
      return {
        mediaCounts: mediaCounts,
      };
    }),
}));
