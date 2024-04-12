import { useInfiniteQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { PosterQuery } from "@/entities";

export const usePostersQuery = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["posters"],
    queryFn: ({ pageParam }) =>
      $fetch.get<PosterQuery>({ path: `image?page=${pageParam}&limit=10&movieId=${id}&type=still&notNullFields=url` }),
    initialPageParam: 1,
    getNextPageParam: (lastPageParam, allPages) => {
      if (lastPageParam.page < lastPageParam.pages) {
        return allPages.length + 1;
      }
    },
  });
};
