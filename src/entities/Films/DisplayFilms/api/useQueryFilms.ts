import { useQuery } from "@tanstack/react-query";
import { $fetch, transformDataObject } from "@/shared";
import { Country, FilmQuery, Genres } from "../types";

export const useQueryFilms = (params: string) => {
  return useQuery({
    queryKey: ["films", params],
    queryFn: ({ signal }) => $fetch.get<FilmQuery<Genres[], Country[]>>({ path: `movie?${params}`, signal }),
    select(data) {
      const newData: FilmQuery<string, string> = {
        limit: data.limit,
        page: data.page,
        pages: data.pages,
        total: data.total,
        docs: [],
      };

      for (let film of data.docs) {
        newData.docs.push({
          ...film,
          genres: transformDataObject(film.genres) || "",
          countries: transformDataObject(film.countries) || "",
        });
      }

      return newData;
    },
  });
};
