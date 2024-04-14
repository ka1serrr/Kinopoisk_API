import { useInfiniteQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { PosterQuery } from "@/entities";

export const usePostersQuery = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["posters", id],
    queryFn: ({ pageParam, signal }) =>
      $fetch.get<PosterQuery>({
        path: `image?page=${pageParam}&limit=10&movieId=${id}&type=still&notNullFields=url`,
        signal,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPageParam, allPages) => {
      if (lastPageParam.page < lastPageParam.pages) {
        return allPages.length + 1;
      }
    },
  });
};
