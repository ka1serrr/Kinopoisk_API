import { useQuery } from "@tanstack/react-query";
import { DefaultFilter } from "@/featurs";
import { $fetch } from "@/shared";

export const useCountryFilters = () => {
  return useQuery({
    queryKey: ["genresQuery", "countries"],
    queryFn: () =>
      $fetch.get<DefaultFilter[]>({ path: "movie/possible-values-by-field?field=countries.name", version: "1" }),
  });
};
