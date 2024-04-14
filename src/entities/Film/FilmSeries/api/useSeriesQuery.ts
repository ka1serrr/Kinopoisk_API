import { useInfiniteQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { SeasonsQuery } from "@/entities";

export const useSeriesQuery = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["seasons", id],
    queryFn: ({ pageParam, signal }) =>
      $fetch.get<SeasonsQuery>({
        path: `season?page=${pageParam}&limit=10&movieId=${id}&sortField=number&sortType=1`,
        signal,
      }),

    initialPageParam: 1,
    getNextPageParam(lastPageParam, allPages) {
      if (lastPageParam.page < lastPageParam.pages) {
        return allPages.length + 1;
      }
    },
  });
};
