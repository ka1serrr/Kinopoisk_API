import { useInfiniteQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { SeasonsQuery } from "@/entities";

export const useSeriesQuery = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["seasons", id],
    queryFn: ({ pageParam }) =>
      $fetch.get<SeasonsQuery>({ path: `season?page=${pageParam}&limit=10&movieId=${id}&sortField=number&sortType=1` }),

    initialPageParam: 1,
    getNextPageParam(lastPageParam, allPages) {
      if (lastPageParam.page < lastPageParam.pages) {
        return allPages.length + 1;
      }
    },
  });
};
