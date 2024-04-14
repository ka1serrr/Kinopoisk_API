import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { SingleFilm } from "@/entities";

export const useRandomFilmQuery = (params: string) => {
  return useQuery({
    queryKey: ["randomFilm", params],
    queryFn: ({ signal }) => $fetch.get<SingleFilm>({ path: `movie/random${params}`, signal }),
    enabled: false,
  });
};
