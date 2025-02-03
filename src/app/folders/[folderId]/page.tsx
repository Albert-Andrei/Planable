import { FolderPage } from "./components/Page";

interface Params {
  params: Promise<{
    folderId: string;
  }>;
}

export async function generateStaticParams() {
  return ["1", "2"].map((id) => ({
    folderId: id,
  }));
}

export default async function Folders({ params }: Params) {
  const { folderId } = await params;

  return <FolderPage folderId={folderId} />;
}
