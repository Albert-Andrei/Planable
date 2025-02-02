import { folders } from "@/data/folders";

export function getMediaTypesCount(folderId: "1" | "2") {
  const mediaTypes = ["image", "video", "gif"] as const;
  const counts = mediaTypes.reduce(
    (acc, type) => {
      acc[type] = folders[folderId].filter((item) => item.type === type).length;
      return acc;
    },
    { image: 0, video: 0, gif: 0 },
  );
  return counts;
}
