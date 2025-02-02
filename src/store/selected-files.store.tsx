import { create } from "zustand";

type FiltersStore = {
  isAllFilesSelected: boolean;
  selectedFileIds: string[]; // Store only the IDs of selected filters
  selectFile: (id: string) => void;
  selectMultipleFiles: (ids: string[]) => void;
  setAllFilesSelected: (value: boolean) => void;
};

export const useSelectedFilesStore = create<FiltersStore>((set) => ({
  // Initial state: No filters are selected by default
  isAllFilesSelected: false,
  selectedFileIds: [],

  selectFile: (id: string) =>
    set((state) => ({
      selectedFileIds: state.selectedFileIds.includes(id)
        ? state.selectedFileIds.filter((filetId) => filetId !== id) // Remove if already selected
        : [...state.selectedFileIds, id], // Add if not selected
    })),
  selectMultipleFiles: (ids: string[]) =>
    set(() => ({
      selectedFileIds: ids,
    })),

  setAllFilesSelected: (value: boolean) =>
    set(() => ({
      isAllFilesSelected: value,
    })),
}));
