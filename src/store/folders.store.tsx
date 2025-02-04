import foldersData from "@/data/folders.json";
import { Media } from "@/types/media.types";
import { create } from "zustand";

type FileStore = {
  folders: {
    [folderId: string]: Media[];
  };
  addFile: (folderId: string, file: Media) => void;
  updateFolder: (folderId: string, files: Media[]) => void;
  removeMultipleFiles: (folderId: string, fileIds: string[]) => void;
  moveMultipleFiles: (fromFolderId: string, toFolderId: string, fileIds: string[]) => void;
};

export const useFoldersStore = create<FileStore>((set) => ({
  folders: foldersData as { [folderId: string]: Media[] },

  updateFolder: (id: string, files: Media[]) =>
    set((state) => ({
      folders: {
        ...state.folders,
        [id]: files,
      },
    })),

  removeMultipleFiles: (folderId: string, fileIds: string[]) =>
    set((state) => {
      // Ensure the folder exists
      if (!state.folders[folderId]) {
        console.error(`Folder with ID ${folderId} does not exist.`);
        return state;
      }

      // Filter out the files to be removed
      const updatedFiles = state.folders[folderId].filter((file) => !fileIds.includes(file.id));

      // Return the updated state
      return {
        folders: {
          ...state.folders,
          [folderId]: updatedFiles,
        },
      };
    }),

  addFile: (folderId: string, file: Media) =>
    set((state) => ({
      folders: {
        ...state.folders,
        [folderId]: [...state.folders[folderId], file],
      },
    })),

  moveMultipleFiles: (fromFolderId: string, toFolderId: string, fileIds: string[]) =>
    set((state) => {
      // Ensure both source and destination folders exist
      if (!state.folders[fromFolderId] || !state.folders[toFolderId]) {
        console.error("Source or destination folder does not exist.");
        return state;
      }

      // Find the files to move
      const filesToMove = state.folders[fromFolderId].filter((file) => fileIds.includes(file.id));

      // If no files are found to move, return the current state
      if (filesToMove.length === 0) {
        console.error("No files found to move.");
        return state;
      }

      // Remove the files from the source folder
      const updatedSourceFolder = state.folders[fromFolderId].filter(
        (file) => !fileIds.includes(file.id),
      );

      // Add the files to the destination folder
      const updatedDestinationFolder = [...state.folders[toFolderId], ...filesToMove];

      // Return the updated state
      return {
        folders: {
          ...state.folders,
          [fromFolderId]: updatedSourceFolder,
          [toFolderId]: updatedDestinationFolder,
        },
      };
    }),
}));
