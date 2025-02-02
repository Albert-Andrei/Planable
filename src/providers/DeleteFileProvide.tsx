"use client";

import { useFoldersStore } from "@/store/folders.store";
import { useSelectedFilesStore } from "@/store/selected-files.store";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";

const DELETE_KEYS = ["Delete", "Backspace"];
export const DeleteFileProvide: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const { removeMultipleFiles } = useFoldersStore();
  const { selectedFileIds, selectMultipleFiles } = useSelectedFilesStore();

  // Handle delete key press
  const handleKeyDown = (event: KeyboardEvent) => {
    if (DELETE_KEYS.includes(event.key)) {
      const folderId = pathname.split("/")[2];

      removeMultipleFiles(folderId, selectedFileIds);
      selectMultipleFiles([]);
    }
  };

  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedFileIds]);

  return children;
};
