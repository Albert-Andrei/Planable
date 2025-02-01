"use client";

import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import Image from "next/image";
import { Checkbox } from "@/components/ui/CheckBox";
import { useFiltersStore } from "@/store/filters.store";
import filters from "@/data/filters.json";

export const FilterList: FC = () => {
  const { selectedFilters, toggleFilter, toggleAllFilters } = useFiltersStore();

  const allFilterIds = filters.map((filter) => filter.id);
  const allFiltersSelected = selectedFilters.length === allFilterIds.length;

  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-sm pl-2">Filters</p>

      <Accordion type="single" defaultValue="filters" collapsible>
        <AccordionItem value="filters">
          <div className="flex flex-1 items-center px-2 py-1">
            <AccordionTrigger className="justify-start">
              <p className="text-xs text-secondary-60 mr-[6px]">Media type</p>

              <Image
                src="/icons/chevron-down.svg"
                alt="chevron down"
                width={16}
                height={16}
                className="shrink-0 transition-transform duration-200"
              />
            </AccordionTrigger>

            <Checkbox
              checked={allFiltersSelected}
              onCheckedChange={() => toggleAllFilters(allFilterIds)}
            />
          </div>
          <AccordionContent>
            <ul className="flex flex-col gap-1 mt-1">
              {filters.map((filter) => {
                const isSelected = selectedFilters.includes(filter.id);

                return (
                  <li key={filter.id} className="flex items-center">
                    <label
                      htmlFor={"filter" + filter.id}
                      className="h-8 w-full px-2 flex items-center justify-between rounded-md hover:bg-secondary-5 cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <Image
                          src={filter.icon}
                          alt="filter icon"
                          width={16}
                          height={16}
                          className="text-secondary-80"
                        />
                        <p className="text-sm">{filter.name}</p>
                        <p className="text-sm text-secondary-40">{filter.count}</p>
                      </div>

                      <Checkbox
                        id={"filter" + filter.id}
                        checked={isSelected}
                        onCheckedChange={() => toggleFilter(filter.id)}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
