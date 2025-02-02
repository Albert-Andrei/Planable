import { folders } from "@/data/folders";
import { FolderPage } from "./components/Page";

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

  return <FolderPage folderId={folderId} />;
}
