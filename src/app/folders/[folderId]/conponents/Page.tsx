"use client";

import { FC } from "react";
import FileGrid from "@/components/file-grid/FileGrid";
import { DeleteFileProvide } from "@/providers/DeleteFileProvide";
import { useFoldersStore } from "@/store/folders.store";
import { Media } from "@/types/media.types";
import Image from "next/image";

interface PageProps {
  folderId: string;
}

export const FolderPage: FC<PageProps> = ({ folderId }) => {
  const { folders } = useFoldersStore();

  const files: Media[] = folders[folderId];
  const hasFiles = files.length > 0;

  return (
    <>
      {hasFiles ? (
        <DeleteFileProvide>
          <FileGrid files={files} />
        </DeleteFileProvide>
      ) : (
        <div
          className="w-full border border-secondary-20 border-dashed rounded-xl flex flex-col items-center justify-center"
          style={{ height: "calc(100vh - 81px)" }}
        >
          <Image src="/icons/empty-folder.svg" alt="empty" width={152} height={92} />

          <div className="flex flex-col items-center gap-2 mt-6">
            <h2 className="text-3xl text-secondary-100">This folder is empty</h2>
            <p className="text-secondary-80">Add images, videos and GIFs.</p>
          </div>
        </div>
      )}
    </>
  );
};
