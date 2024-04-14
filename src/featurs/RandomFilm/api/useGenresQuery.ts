import { useQuery } from "@tanstack/react-query";
import { DefaultFilter } from "@/featurs";
import { $fetch } from "@/shared";

export const useGenresQuery = () => {
  return useQuery({
    queryKey: ["genresQuery", "genres"],
    queryFn: () =>
      $fetch.get<DefaultFilter[]>({ path: "movie/possible-values-by-field?field=genres.name", version: "1" }),
  });
};
