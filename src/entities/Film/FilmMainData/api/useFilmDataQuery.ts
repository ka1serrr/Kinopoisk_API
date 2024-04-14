import { useQuery } from "@tanstack/react-query";
import { $fetch, transformDataObject } from "@/shared";
import { SingleFilm } from "@/entities";

export const useFilmDataQuery = (id: string) => {
  return useQuery({
    queryKey: ["film", id],
    queryFn: ({ signal }) => $fetch.get<SingleFilm>({ path: `movie/${id}`, signal }),
    select(data) {
      data.genres = transformDataObject(data.genres);
      data.countries = transformDataObject(data.countries);
      return data;
    },
  });
};
