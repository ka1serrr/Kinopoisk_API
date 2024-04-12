import { Country, Film, Genres } from "@/entities";

type Person = {
  description: string;
  id: number;
  profession: string;
  name: string;
  photo: string;
};

type SimilarMovie = {
  id: number;
  name: string;
  poster: Pick<Film<any, any>, "poster">;
  year: number;
  type: "movie" | "serial";
};

type Rating = {
  kp: number;
};

export type SeasonInfo = {
  number: number;
  episodesCount: number;
};

export type SingleFilm = Film<string, string> & {
  persons: Person[];
  similarMovies: SimilarMovie[];
  rating: Rating;
  seasonsInfo: SeasonInfo[];
};
