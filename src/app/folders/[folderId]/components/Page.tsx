"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import FileGrid from "@/components/file-grid/FileGrid";
import { DeleteFileProvide } from "@/providers/DeleteFileProvide";
import { useFoldersStore } from "@/store/folders.store";
import { Media, MediaType } from "@/types/media.types";
import Image from "next/image";

interface PageProps {
  folderId: string;
}

export const FolderPage: FC<PageProps> = ({ folderId }) => {
  const { folders, addFile } = useFoldersStore();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const files: Media[] = folders[folderId];
  const hasFiles = files.length > 0;

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    processFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    processFile(file);
  };

  const processFile = (file: File | undefined) => {
    if (file) {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        const isImage = file.type.startsWith("image/");
        addFile(folderId, {
          id: file.name,
          name: file.name,
          type: isImage ? MediaType.Image : MediaType.Video,
          src: isImage ? URL.createObjectURL(file) : "",
        });
        console.log("Selected file:", file);
      } else {
        alert("Please select a valid image, GIF, or video file.");
      }
    }
  };

  // Trigger the file input dialog
  const handleButtonClick = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {hasFiles ? (
        <DeleteFileProvide>
          <FileGrid files={files} />
        </DeleteFileProvide>
      ) : (
        <div
          className={`w-full border border-secondary-20 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer ${
            isDragging ? "bg-primary-100/10" : ""
          }`}
          style={{ height: "calc(100vh - 81px)" }}
          onClick={handleButtonClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnter={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*, video/*"
            className="hidden"
            onChange={handleFileChange}
          />

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
