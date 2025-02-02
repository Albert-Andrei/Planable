import { Media } from "@/types/media.types";
import { MediaCard } from "@/components/cards/MediaCard";

interface FileGridProps {
  files: Media[];
}

export default function FileGrid({ files }: FileGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {files.map((file) => (
        <MediaCard key={file.id} file={file} />
      ))}
    </div>
  );
}
