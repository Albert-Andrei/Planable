import FileGrid from "@/components/file-grid/FileGrid";
import { folders } from "@/data/folders";
import { Media } from "@/types/media.types";
import Image from "next/image";

interface Params {
  params: {
    folderId: string;
  };
}

export async function generateStaticParams() {
  const folderIds = Object.keys(folders);

  return folderIds.map((id) => ({
    folderId: id,
  }));
}

export default async function Folders({ params }: Params) {
  const { folderId } = await params;

  const files: Media[] = folders[folderId as "1" | "2"];
  const hasFiles = files.length > 0;

  return (
    <>
      {hasFiles ? (
        <FileGrid files={files} />
      ) : (
        <div
          className="w-full border border-secondary-20 border-dashed rounded-xl flex flex-col items-center justify-center"
          style={{ height: "calc(100vh - 81px)" }}
        >
          <Image src="/icons/empty-folder.svg" alt="empty" width={152} height={92} />

          <div className="flex flex-col items-center gap-2 mt-6">
            <h2 className="text-3xl text-secondary-100">This folder is empty</h2>
            <p className="text-secondary-80">Add images, videos and GIFs.</p>
          </div>
        </div>
      )}
    </>
  );
}
