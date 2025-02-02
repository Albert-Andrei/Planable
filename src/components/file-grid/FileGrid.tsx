"use client";

import { Media } from "@/types/media.types";
import { MediaCard } from "@/components/cards/MediaCard";
import { useSelectedFilesStore } from "@/store/selected-files.store";
import { useEffect, useMemo, useState } from "react";
import { useFiltersStore } from "@/store/filters.store";
import { useSearchStore } from "@/store/search.store";

interface FileGridProps {
  files: Media[];
}

export default function FileGrid({ files }: FileGridProps) {
  const { search } = useSearchStore();
  const { selectedFilters } = useFiltersStore();
  const { isAllFilesSelected, selectMultipleFiles } = useSelectedFilesStore();

  const allIds = useMemo(() => files.map((file) => file.id), [files]);
  const filteredData = useMemo(() => {
    return files?.filter((file) => selectedFilters.includes(file.type));
  }, [selectedFilters, files]);

  const [filesToShow, setFilesToShow] = useState<Media[]>([]);

  useEffect(() => {
    setFilesToShow(filteredData);
  }, [filteredData]);

  useEffect(() => {
    if (isAllFilesSelected) {
      selectMultipleFiles(allIds);
    } else {
      selectMultipleFiles([]);
    }
  }, [isAllFilesSelected]);

  useEffect(() => {
    if (search) {
      const filteredFiles = filteredData.filter((file) =>
        file.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilesToShow(filteredFiles);
    }
  }, [search, filteredData]);

  return (
    <>
      {filesToShow.length === 0 && (
        <div
          className="w-full flex items-center justify-center"
          style={{ height: "calc(100vh - 81px)" }}
        >
          <p className="text-secondary-60 text-xl font-normal">
            {search?.length > 0
              ? `No files match the search "${search}"`
              : "No files match the selected filters"}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {filesToShow.map((file) => (
          <MediaCard key={file.id} file={file} />
        ))}
      </div>
    </>
  );
}
