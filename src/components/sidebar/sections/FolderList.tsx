"use client";

import { useFoldersStore } from "@/store/folders.store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const foldersData = [
  { id: "1", name: "Your folder", icon: "/icons/folder.svg", count: 30 },
  { id: "2", name: "New folder", icon: "/icons/folder.svg", count: 0 },
];

export const FolderList: FC = () => {
  const pathname = usePathname();
  const { folders } = useFoldersStore();

  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-sm pl-2">Folders</p>

      <ul className="flex flex-col gap-1">
        {foldersData.map((folder) => {
          const isActive = pathname.includes(`/folders/${folder.id}`);

          return (
            <li key={folder.id}>
              <Link
                href={`/folders/${folder.id}`}
                className={`h-8 w-full px-2 flex items-center gap-2 rounded-md hover:bg-secondary-5 ${
                  isActive ? "bg-secondary-5" : ""
                }`}
              >
                <Image
                  src={folder.icon}
                  alt="folder icon"
                  width={16}
                  height={16}
                  className="text-secondary-80"
                />
                <p className="text-sm">{folder.name}</p>
                <p className="text-sm text-secondary-40">
                  {folders[folder.id as "1" | "2"].length}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
