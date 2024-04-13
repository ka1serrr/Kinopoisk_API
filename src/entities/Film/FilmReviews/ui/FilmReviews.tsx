import { FilmReview, useReviewsQuery } from "@/entities";
import { useParams } from "react-router-dom";
import "dayjs/locale/ru.js";
import { Button } from "@/shared";
import { Loader2 } from "lucide-react";

export const FilmReviews = () => {
  const { id } = useParams();

  const { data, isFetching, fetchNextPage, hasNextPage } = useReviewsQuery(Number(id));

  const content = data?.pages?.map(
    (reviews) => reviews?.docs.map((review) => <FilmReview key={review.id} review={review} />),
  );

  return (
    <section className='mt-2'>
      <h3 className='text-3xl font-bold mb-2 text-center'>Отзывы</h3>
      <div className='w-full md:w-1/2 flex flex-col gap-4'>
        {content}
        <div className='flex items-center justify-center'>
          {hasNextPage && (
            <Button variant='ghost' onClick={() => fetchNextPage()} disabled={isFetching}>
              {isFetching ? <Loader2 className='animate-spin' /> : "Загрузить ещё"}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
