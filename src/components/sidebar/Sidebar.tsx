import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type SidebarProps = {};

const foldersData = [
  { id: "1", name: "Your folder", icon: "/icons/folder.svg", count: 30 },
  { id: "2", name: "New folder", icon: "/icons/folder.svg", count: 0 },
];

const filtersData = [
  { id: "filter_1", name: "Images", icon: "/icons/filters/media.svg", count: 0, isChecked: true },
  { id: "filter_2", name: "Videos", icon: "/icons/filters/play.svg", count: 0, isChecked: true },
  { id: "filter_3", name: "GIFs", icon: "/icons/filters/gif.svg", count: 0, isChecked: true },
];

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-[232px] h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full p-4 overflow-y-auto bg-background flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={32}
            height={32}
            className="rounded-[8px]"
          />

          <p>Media gallery</p>
        </div>

        {/* Folders */}
        <div className="flex flex-col gap-4">
          <p className="font-medium text-sm px-2">Folders</p>

          <ul className="flex flex-col gap-1">
            {foldersData.map((folder) => (
              <li key={folder.id}>
                <Link
                  href={`/folders/${folder.id}`}
                  className="h-8 w-full px-2 flex items-center gap-2 rounded-md hover:bg-secondary-5 "
                >
                  <Image
                    src={folder.icon}
                    alt="folder icon"
                    width={16}
                    height={16}
                    className="text-secondary-80"
                  />
                  <p className="text-sm">{folder.name}</p>
                  <p className="text-sm text-secondary-40">{folder.count}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4">
          <p className="font-medium text-sm px-2">Filters</p>

          <ul className="flex flex-col gap-1">
            {filtersData.map((folder) => (
              <li key={folder.id}>
                <button className="h-8 w-full px-2 flex items-center gap-2 rounded-md hover:bg-secondary-5 ">
                  <Image
                    src={folder.icon}
                    alt="folder icon"
                    width={16}
                    height={16}
                    className="text-secondary-80"
                  />
                  <p className="text-sm">{folder.name}</p>
                  <p className="text-sm text-secondary-40">{folder.count}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
