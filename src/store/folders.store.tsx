import { folders } from "@/data/folders";
import { Media } from "@/types/media.types";
import { create } from "zustand";

type FileStore = {
  folders: {
    [folderId: string]: Media[];
  };
  addFile: (folderId: string, file: Media) => void;
  updateFolder: (folderId: string, files: Media[]) => void;
  removeMultipleFiles: (folderId: string, fileIds: string[]) => void;
};

export const useFoldersStore = create<FileStore>((set) => ({
  folders: folders,

  updateFolder: (id: string, files: Media[]) =>
    set((state) => ({
      folders: {
        ...state.folders,
        [id]: files,
      },
    })),

  removeMultipleFiles: (folderId: string, fileIds: string[]) =>
    set((state) => {
      console.log("REMOVE > ", folderId, fileIds);

      // Ensure the folder exists
      if (!state.folders[folderId]) {
        console.error(`Folder with ID ${folderId} does not exist.`);
        return state;
      }

      // Filter out the files to be removed
      const updatedFiles = state.folders[folderId].filter((file) => !fileIds.includes(file.id));

      console.log("Updated Files: ", updatedFiles);

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
}));
