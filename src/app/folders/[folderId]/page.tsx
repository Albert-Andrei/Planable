import { FolderPage } from "./components/Page";

interface Params {
  params: Promise<{
    folderId: string;
  }>;
}

export async function generateStaticParams() {
  return ["1", "2", "3", "4"].map((id) => ({
    folderId: id,
  }));
}

export default async function Folders({ params }: Params) {
  const { folderId } = await params;

  if (folderId === "3") {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  return <FolderPage folderId={folderId} />;
}
