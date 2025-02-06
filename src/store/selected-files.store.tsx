import { create } from "zustand";

type SelectStore = {
  lastSelectedIndex: number;
  isAllFilesSelected: boolean;
  selectedFileIds: string[]; // Store only the IDs of selected filters
  selectFile: (id: string) => void;
  selectMultipleFiles: (ids: string[]) => void;
  setAllFilesSelected: (value: boolean) => void;
  setLastSelectedIndex: (index: number) => void;
};

export const useSelectedFilesStore = create<SelectStore>((set) => ({
  // Initial state: No filters are selected by default
  lastSelectedIndex: -1,
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

  setLastSelectedIndex: (index: number) =>
    set(() => ({
      lastSelectedIndex: index,
    })),
}));
