import { usePostersQuery } from "@/entities";
import { useParams } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared";

import ProgressiveImage from "react-progressive-graceful-image";
import { clsx } from "clsx";

export const FilmPostersDesktop = () => {
  const { id } = useParams();
  const { data, fetchNextPage, hasNextPage } = usePostersQuery(Number(id));

  const content = data?.pages[0]?.docs.map((poster) => {
    return (
      <CarouselItem className='pl-1 basis md:basis-1/3' key={poster.url}>
        <ProgressiveImage src={poster.url} placeholder={poster.previewUrl}>
          {(src, loading) => (
            <img
              className={clsx("w-[400px]", {
                "blur-md": loading,
              })}
              src={src}
              alt=''
              loading={"lazy"}
            />
          )}
        </ProgressiveImage>
      </CarouselItem>
    );
  });

  const areImagesUnAvailable = data?.pages[0]?.total === 0;

  const noImagesForNow = data?.pages[0]?.docs.length === 0;

  return (
    <section className='flex flex-col justify-center my-2 md:my-5'>
      {areImagesUnAvailable ? (
        <h3 className='text-3xl font-bold text-center'>Нет изображений</h3>
      ) : (
        <>
          <h3 className='text-3xl font-bold text-center'>Изображения</h3>
          <Carousel className='w-full'>
            <CarouselContent className='h-64'>{content}</CarouselContent>
            <CarouselPrevious
              className={clsx("left-2 size-11", {
                hidden: noImagesForNow,
              })}
            />
            <CarouselNext
              className={clsx("right-2 size-11", {
                hidden: noImagesForNow,
              })}
            />
          </Carousel>
        </>
      )}
    </section>
  );
};
