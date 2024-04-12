import { DefaultQuery } from "@/shared";

type Episode = {
  number: number;
  name: string;
  enName: string;
  duration: number;
};

type Season = {
  number: number;
  episodesCount: number;
  episodes: Episode[];
};

export type SeasonsQuery = DefaultQuery<Season[]>;
