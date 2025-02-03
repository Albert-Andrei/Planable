import { FolderCard } from "@/components/cards/FolderCard";
import { FC } from "react";

export const foldersData = [
  { id: "1", name: "Your folder", icon: "/icons/folder.svg", count: 30 },
  { id: "2", name: "New folder", icon: "/icons/folder.svg", count: 0 },
];

export const FolderList: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-sm pl-2">Folders</p>

      <div className="flex flex-col gap-1">
        {foldersData.map((folder) => {
          return <FolderCard key={folder.id} folder={folder} />;
        })}
      </div>
    </div>
  );
};
