import Link from "next/link";
import Image from "next/image";
import { foldersData } from "@/components/sidebar/sections/FolderList";

const folders = [
  ...foldersData,
  { id: "3", name: "Loading folder", icon: "/icons/folder.svg", count: 0 },
  { id: "4", name: "Error folder", icon: "/icons/folder.svg", count: 0 },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <p>My Folders</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {folders.map((folder) => (
          <Link
            key={folder.id}
            href={`/folders/${folder.id}`}
            className="h-[46px] w-full bg-secondary-5 rounded-lg flex items-center px-4"
            style={{
              background: folder.id === "3" ? "#feec85" : folder.id === "4" ? "#ff9d9d" : "",
            }}
          >
            <div className="flex justify-center items-center gap-2">
              <Image
                src={folder.icon}
                alt="folder icon"
                width={16}
                height={16}
                className="text-secondary-80"
              />
              <p className="text-secondary-80 text-sm">{folder.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
