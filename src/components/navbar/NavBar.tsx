import React, { FC } from "react";
import { Checkbox } from "../ui/CheckBox";

export const NavBar: FC = () => {
  return (
    // padding left 240px = 232px sidebar + 8px padding
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col h-[64px] px-2 pl-[240px] max-sm:pl-0 bg-background">
      <div className="flex flex-1 items-center gap-2">
        <Checkbox id="selected_count" className="border-secondary-20" />
        <label htmlFor="selected_count" className="text-sm text-secondary-60">
          0 selected
        </label>
      </div>
      <div className="h-[1px] w-full bg-secondary-10" />
    </div>
  );
};
