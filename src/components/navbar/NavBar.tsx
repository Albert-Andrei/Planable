"use client";

import React, { FC } from "react";
import { Checkbox } from "@/components/ui/CheckBox";
import { useSelectedFilesStore } from "@/store/selected-files.store";

export const NavBar: FC = () => {
  const { isAllFilesSelected, selectedFileIds, setAllFilesSelected, selectMultipleFiles } =
    useSelectedFilesStore();
  const hasSelectedFiles = selectedFileIds.length > 0;

  return (
    // padding left 240px = 232px sidebar + 8px padding
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col h-[64px] px-2 pl-[240px] max-sm:pl-0 bg-background">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            asRadio
            id="selected_count"
            className="border-secondary-20"
            checked={isAllFilesSelected || hasSelectedFiles}
            onCheckedChange={(value) => {
              console.log("value", value);

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
      </div>
      <div className="h-[1px] w-full bg-secondary-10" />
    </div>
  );
};
