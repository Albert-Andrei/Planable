"use client";

import { usePathname } from "next/navigation";
import React, { FC, useState, DragEvent } from "react";
import { useFoldersStore } from "@/store/folders.store";
import Image from "next/image";
import Link from "next/link";
import { useSelectedFilesStore } from "@/store/selected-files.store";

type FolderCardProps = {
  folder: {
    id: string;
    name: string;
    icon: string;
    count: number;
  };
};

export const FolderCard: FC<FolderCardProps> = ({ folder }) => {
  const pathname = usePathname();
  const { folders, moveMultipleFiles } = useFoldersStore();
  const { selectedFileIds, selectMultipleFiles } = useSelectedFilesStore();

  const [isDragOver, setIsDragOver] = useState(false);

  const isActive = pathname.includes(`/folders/${folder.id}`);
  const currentFolderId = pathname.split("/")[2];

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (currentFolderId !== folder.id) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = () => {
    setIsDragOver(false);

    if (currentFolderId === folder.id) {
      alert("You cannot move a file to the same folder.");
      return;
    }

    if (selectedFileIds.length === 0) {
      alert(
        "Please select a file you want to move before dragging it here. This is a known limitation",
      );
      return;
    }
    moveMultipleFiles(currentFolderId, folder.id, selectedFileIds);
    selectMultipleFiles([]);
  };

  return (
    <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <Link
        href={`/folders/${folder.id}`}
        className={`h-8 w-full px-2 flex items-center gap-2 rounded-md hover:bg-secondary-5 ${
          isActive ? "bg-secondary-5" : ""
        } ${isDragOver ? "bg-primary-100/10" : ""}`}
      >
        <Image
          src={folder.icon}
          alt="folder icon"
          width={16}
          height={16}
          className="text-secondary-80"
        />
        <p className="text-sm">{folder.name}</p>
        <p className="text-sm text-secondary-40">{folders[folder.id as "1" | "2"].length}</p>
      </Link>
    </div>
  );
};
