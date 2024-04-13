import { Review, setBgDependsOnReviewType } from "@/entities";
import dayjs from "dayjs";
import parse from "html-react-parser";
import { FC, useState } from "react";
import { Button, cn } from "@/shared";

type Props = {
  review: Review;
};
export const FilmReview: FC<Props> = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article key={review.id} className={`w-full border rounded ${setBgDependsOnReviewType(review.type)}`}>
      <div className='flex justify-between p-2 border-b border-b-gray-300'>
        <span>{review.author}</span>
        <span className='text-sm text-gray-500'>{dayjs(review.date).locale("ru").format("D MMMM YYYY")}</span>
      </div>

      <div className='p-2'>
        <h4 className='font-bold text-base'>{review?.title || "Нет заголовка"}</h4>
        <p
          className={cn("max-h-10 transition-[max-height] duration-700 overflow-hidden", {
            "max-h-[1000px] transition-[max-height] duration-700": isOpen,
          })}
        >
          {parse(review.review)}
        </p>
        <div className='flex items-center justify-center'>
          <Button className='mt-2' variant='ghost' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Закрыть" : "Открыть"}
          </Button>
        </div>
      </div>
    </article>
  );
};
