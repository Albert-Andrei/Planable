import React, { FC } from "react";
import { Checkbox } from "../ui/CheckBox";

export const NavBar: FC = () => {
  return (
    <div className="flex flex-1 flex-col h-[64px] px-2 ml-[232px] max-sm:ml-0">
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
