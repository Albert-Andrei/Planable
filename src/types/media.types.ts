export enum MediaType {
  Image = "image",
  Video = "video",
  Gif = "gif",
}

export interface Media {
  id: string;
  name: string;
  type: MediaType;
  thumbnail?: string;
  src: string;
}
