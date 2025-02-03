"use client";

import React, { FC, use, useEffect, useState } from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/CheckBox";
import { useSelectedFilesStore } from "@/store/selected-files.store";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import { foldersData } from "../sidebar/sections/FolderList";
import { usePathname } from "next/navigation";
import { useFoldersStore } from "@/store/folders.store";

export const NavBar: FC = () => {
  const pathname = usePathname();
  const { moveMultipleFiles } = useFoldersStore();
  const { isAllFilesSelected, selectedFileIds, setAllFilesSelected, selectMultipleFiles } =
    useSelectedFilesStore();

  const [selectedFolder, setSelectedFolder] = useState(foldersData[0]);

  const currentFolderId = pathname.split("/")[2];
  const hasSelectedFiles = selectedFileIds.length > 0;
  const currentFolder = foldersData?.find((folder) => folder?.id === currentFolderId);

  useEffect(() => {
    if (currentFolder) {
      setSelectedFolder(currentFolder);
    }
  }, [currentFolder]);

  const handleMoveToAnotherFolder = (newFolderId: string) => {
    setSelectedFolder(foldersData.find((folder) => folder.id === newFolderId)!);

    moveMultipleFiles(currentFolderId, newFolderId, selectedFileIds);
    selectMultipleFiles([]);
    if (currentFolder) {
      setSelectedFolder(currentFolder);
    }
  };

  return (
    // padding left 240px = 232px sidebar + 8px padding
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col h-[64px] px-2 pl-[240px] max-sm:pl-0 bg-background">
      <div className="flex flex-1 items-center gap-6">
        <div className="flex items-center gap-2">
          <Checkbox
            asRadio
            id="selected_count"
            className="border-secondary-20"
            checked={isAllFilesSelected || hasSelectedFiles}
            onCheckedChange={(value) => {
              if (hasSelectedFiles) {
                selectMultipleFiles([]);
              }
              setAllFilesSelected(value === "indeterminate" ? false : value);
            }}
          />
          <label htmlFor="selected_count" className="text-sm text-secondary-60">
            {selectedFileIds.length} selected
          </label>
        </div>

        {hasSelectedFiles && (
          <Select value={selectedFolder?.id} onValueChange={handleMoveToAnotherFolder}>
            <SelectTrigger className="w-[150px] border border-secondary-20">
              <div className="flex items-center gap-2">
                <Image
                  src={"/icons/folder.svg"}
                  alt="folder icon"
                  width={16}
                  height={16}
                  style={{ filter: "brightness(0) saturate(100%)" }}
                />

                <p className="text-sm text-secondary-100">{selectedFolder.name}</p>
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-background">
              {foldersData.map((folder) => (
                <SelectItem
                  key={folder.id}
                  value={folder.id}
                  disabled={folder.id === currentFolderId}
                >
                  {folder.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="h-[1px] w-full bg-secondary-10" />
    </div>
  );
};
