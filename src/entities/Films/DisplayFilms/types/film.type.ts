export type Country = {
  name: string;
};

type Votes = {
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
};

type Poster = {
  previewUrl: string;
};

export type Genres = {
  name: string;
};

export type Film<T, Y> = {
  id: number;
  name: string;
  genres: T;
  movieLength: number;
  seriesLength: number;
  isSeries: boolean;
  ageRating: string;
  alternativeName: string;
  countries: Y;
  description: string;
  shortDescription: string;
  status: null;
  votes: Votes;
  poster: Poster;
  year: number;
  ticketsOnSale: boolean;
  top10: null | number;
  top250: null | number;
};

export type FilmQuery<T, Y> = {
  docs: Film<T, Y>[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};
