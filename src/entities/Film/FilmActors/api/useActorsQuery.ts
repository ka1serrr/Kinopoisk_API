import { useInfiniteQuery } from "@tanstack/react-query";
import { $fetch } from "@/shared";
import { ActorsQuery } from "@/entities";

export const useActorsQuery = (id: number) => {
  return useInfiniteQuery({
    queryKey: ["actors", id],
    queryFn: ({ pageParam }) =>
      $fetch.get<ActorsQuery>({
        path: `person?page=${pageParam}&limit=12&movies.id=${id}&profession.value=%D0%90%D0%BA%D1%82%D0%B5%D1%80&profession.value=%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D0%B0`,
      }),
    initialPageParam: 1,
    getNextPageParam(lastPageParam, allPages) {
      if (lastPageParam.page < lastPageParam.pages) {
        return allPages.length + 1;
      }
    },
  });
};
