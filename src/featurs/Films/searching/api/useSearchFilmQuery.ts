import { useQuery } from "@tanstack/react-query";
import { $fetch, transformDataObject } from "@/shared";
import { Country, FilmQuery, Genres } from "@/entities";

export const useSearchFilmQuery = (filmName: string) => {
  return useQuery({
    queryKey: ["filmName", filmName],
    queryFn: () => $fetch.get<FilmQuery<Genres[], Country[]>>({ path: `movie/search?query=${filmName}&limit=5` }),
    retry: 3,
    enabled: !!filmName,
    refetchOnWindowFocus: false,
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
