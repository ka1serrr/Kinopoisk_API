import { useInfiniteQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { ReviewsQuery } from "@/entities";

export const useReviewsQuery = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["reviews", id],
    queryFn: ({ pageParam }) => $fetch.get<ReviewsQuery>({ path: `review?page=${pageParam}&limit=10&movieId=${id}` }),
    initialPageParam: 1,
    getNextPageParam: (lastPageParam, allPages) => {
      if (lastPageParam.page < lastPageParam.pages) {
        return allPages.length + 1;
      }
    },
  });
};
