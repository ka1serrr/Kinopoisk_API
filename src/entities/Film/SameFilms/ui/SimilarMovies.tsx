import { SimilarMovie } from "@/entities";
import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared";
import ProgressiveImage from "react-progressive-graceful-image";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { routes } from "@/app";

type Props = {
  similarMovies: SimilarMovie[] | undefined;
};

export const SimilarMovies: FC<Props> = ({ similarMovies }) => {
  const content = similarMovies?.map((movie) => {
    return (
      <CarouselItem className='pl-14 basis-1/2 md:basis-1/3' key={movie.id}>
        <Link to={`${routes.filmsPage}/${movie.id}`}>
          <ProgressiveImage src={movie.poster.url} placeholder={movie.poster.previewUrl}>
            {(src, loading) => (
              <img
                className={clsx("h-[450px]", {
                  "blur-md": loading,
                })}
                src={src}
                alt=''
                loading={"lazy"}
              />
            )}
          </ProgressiveImage>
        </Link>
      </CarouselItem>
    );
  });

  return (
    <div className='mt-4'>
      <h3 className='text-3xl font-bold mb-2 text-center'>Похожие фильмы</h3>
      <Carousel className='w-full'>
        <CarouselContent>{content}</CarouselContent>
        <CarouselPrevious className='left-2 size-11' />
        <CarouselNext className='right-2 size-11' />
      </Carousel>
    </div>
  );
};
