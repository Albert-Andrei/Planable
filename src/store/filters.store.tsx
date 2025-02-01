import { create } from "zustand";

type FiltersStore = {
  selectedFilters: string[]; // Store only the IDs of selected filters
  toggleFilter: (id: string) => void;
  toggleAllFilters: (allFilterIds: string[]) => void;
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  // Initial state: No filters are selected by default
  selectedFilters: [],

  toggleFilter: (id: string) =>
    set((state) => ({
      selectedFilters: state.selectedFilters.includes(id)
        ? state.selectedFilters.filter((filterId) => filterId !== id) // Remove if already selected
        : [...state.selectedFilters, id], // Add if not selected
    })),

  toggleAllFilters: (allFilterIds: string[]) =>
    set((state) => {
      const allSelected = state.selectedFilters.length === allFilterIds.length;
      return {
        selectedFilters: allSelected ? [] : allFilterIds, // Select all if none or some are selected, else deselect all
      };
    }),
}));
