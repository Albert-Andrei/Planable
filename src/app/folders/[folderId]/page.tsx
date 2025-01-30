import Image from "next/image";

export default async function Folders({ folderId }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="flex justify-center items-center h-screen w-full ">Folder: {folderId}</div>
  );
}
