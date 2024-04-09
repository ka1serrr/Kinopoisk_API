import { useQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";

export const useSearchFilmQuery = (filmName: string) => {
  return useQuery({
    queryKey: ["filmName", filmName],
    queryFn: () => $fetch.get({ path: `movie/search?query=${filmName}` }),
    retry: 3,
    enabled: !!filmName,
    refetchOnWindowFocus: false,
  });
};
