import { DefaultQuery } from "@/shared";

export type Poster = {
  url: string;
  previewUrl: string;
};

export type PosterQuery = DefaultQuery<Poster[]>;
