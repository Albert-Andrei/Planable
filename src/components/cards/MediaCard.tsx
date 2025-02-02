"use client";

import Image from "next/image";
import React, { FC } from "react";
import { Checkbox } from "@/components/ui/CheckBox";
import { Media, MediaType } from "@/types/media.types";
import { useSelectedFilesStore } from "@/store/selected-files.store";

type MediaCardProps = {
  file: Media;
};

export const MediaCard: FC<MediaCardProps> = ({ file }) => {
  const { selectedFileIds, selectFile } = useSelectedFilesStore();

  const fileIndex = selectedFileIds.indexOf(file.id);
  const isSelected = fileIndex !== -1;
  const order = fileIndex + 1;

  const handleSelectFile = () => {
    selectFile(file.id);
  };

  return (
    <div
      key={file.name}
      className="group relative flex flex-col cursor-grab"
      onClick={handleSelectFile}
    >
      {/* Image container */}
      <div
        className={`relative aspect-square overflow-hidden flex justify-center items-center p-[4px] border ${
          isSelected ? "bg-primary-100/10 border-primary-100" : "border-transparent"
        } rounded-[9px] group-hover:bg-transparent group-hover:border-transparent`}
      >
        {/* Overlay (hidden by default, shown on hover) */}
        <div className="absolute inset-0 z-30 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-200">
          <Image
            src="/icons/expand.svg"
            alt="expand"
            width={20}
            height={20}
            className="absolute top-1 left-1 cursor-pointer"
          />

          <Checkbox
            className="absolute bottom-1 left-1 h-5 w-5 border-neutral-100 border-[1.5px]"
            checked={isSelected}
            onChange={handleSelectFile}
          />
        </div>

        {/* Selected Indicator */}
        {isSelected && (
          <div className="absolute bottom-1 left-1 w-5 h-5 z-20  bg-primary-100 rounded-[4px] flex justify-center items-center group-hover:hidden transition">
            <p className="text-[10px] text-neutral-100">{order}</p>
          </div>
        )}

        {/* Video play icon */}
        {[MediaType.Video, MediaType.Gif].includes(file.type) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <Image
              src={file.type === MediaType.Gif ? "/icons/gif.svg" : "/icons/play.svg"}
              alt="play"
              width={28}
              height={28}
            />
          </div>
        )}

        {/* Image */}
        <img
          src={file.thumbnail || file.src || "/placeholder.svg"}
          alt={file.name}
          className="object-contain border-[1.5px] border-neutral-60 rounded-[4px]"
        />
      </div>

      {/* Subtitle */}
      <div className="h-7 flex justify-center items-center">
        <p
          className={`truncate text-xs text-center ${
            isSelected ? "text-primary-100" : "text-secondary-80"
          }`}
        >
          {file.name}
        </p>
      </div>
    </div>
  );
};
