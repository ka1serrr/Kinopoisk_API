import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { DefaultFilter } from "@/featurs";

export const useTypeQuery = () => {
  return useQuery({
    queryKey: ["genresQuery", "types"],
    queryFn: () => $fetch.get<DefaultFilter[]>({ path: "movie/possible-values-by-field?field=type", version: "1" }),
  });
};
