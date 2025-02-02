"use client";

import { Media } from "@/types/media.types";
import { MediaCard } from "@/components/cards/MediaCard";
import { useSelectedFilesStore } from "@/store/selected-files.store";
import { useEffect, useMemo } from "react";

interface FileGridProps {
  files: Media[];
}

export default function FileGrid({ files }: FileGridProps) {
  const { isAllFilesSelected, selectMultipleFiles } = useSelectedFilesStore();

  const allIds = useMemo(() => files.map((file) => file.id), []);

  useEffect(() => {
    if (isAllFilesSelected) {
      selectMultipleFiles(allIds);
    } else {
      selectMultipleFiles([]);
    }
  }, [isAllFilesSelected]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {files.map((file) => (
        <MediaCard key={file.id} file={file} />
      ))}
    </div>
  );
}
