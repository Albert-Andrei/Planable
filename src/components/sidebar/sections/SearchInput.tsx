"use client";

import { useSearchStore } from "@/store/search.store";
import Image from "next/image";
import React, { FC } from "react";

export const SearchInput: FC = () => {
  const { setSearch } = useSearchStore();

  return (
    <div className="flex items-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <Image src="/icons/search.svg" alt="search" width={24} height={24} className="w-5 h-5" />
        </div>
        <input
          type="text"
          id="search"
          className="bg-secondary-5 border border-secondary-10 text-secondary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-8 p-2"
          placeholder="Search file..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
