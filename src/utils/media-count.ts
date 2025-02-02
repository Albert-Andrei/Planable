import { Media } from "@/types/media.types";

export function getMediaTypesCount(files: Media[]) {
  const mediaTypes = ["image", "video", "gif"] as const;
  const counts = mediaTypes.reduce(
    (acc, type) => {
      acc[type] = files?.filter((item) => item.type === type).length;
      return acc;
    },
    { image: 0, video: 0, gif: 0 },
  );
  return counts;
}
