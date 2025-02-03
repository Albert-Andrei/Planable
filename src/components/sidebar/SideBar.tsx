import Image from "next/image";
import { FC } from "react";
import { FilterList } from "./sections/FilterList";
import { FolderList } from "./sections/FolderList";
import { SearchInput } from "./sections/SearchInput";
import Link from "next/link";

export const SideBar: FC = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 w-[232px] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full p-4 overflow-y-auto bg-background flex flex-col gap-8">
        {/* Header */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={32}
            height={32}
            className="rounded-[8px]"
          />

          <p>Media gallery</p>
        </Link>

        <FolderList />
        <FilterList />
        <SearchInput />
      </div>
    </aside>
  );
};
