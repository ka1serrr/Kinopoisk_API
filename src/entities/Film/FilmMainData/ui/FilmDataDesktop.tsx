import { FilmDescrDesktop, SingleFilm } from "@/entities";
import { NO_DATA_TEXT } from "@/app";
import { FC } from "react";
import { clsx } from "clsx";
import ProgressiveImage from "react-progressive-graceful-image";

type Props = {
  film: SingleFilm | undefined;
};
export const FilmDataDesktop: FC<Props> = ({ film }) => {
  return (
    <>
      <section className='flex justify-between'>
        <ProgressiveImage placeholder={film?.poster?.previewUrl} src={String(film?.poster?.url)}>
          {(src, loading) => (
            <img
              className={clsx("block flex-shrink-0 w-[100px] base:w-1/3 md:w-[300px]", {
                "blur-md": loading,
              })}
              src={src}
              alt={`Картинка к фильму ${film?.name}`}
              loading='lazy'
            />
          )}
        </ProgressiveImage>

        <div className='basis-3/5'>
          <h1 className='text-xl md:text-4xl font-bold mb-4'>{film?.name || film?.alternativeName}</h1>
          <p className='text-sm md:text-xl text-justify'>{film?.shortDescription || NO_DATA_TEXT.noDescr}</p>

          <div className='mt-4'>
            <h2 className='md:text-2xl font-600 mb-2'>О фильме</h2>
            <FilmDescrDesktop
              isSeries={film?.isSeries}
              ageRating={film?.ageRating}
              countries={film?.countries}
              genres={film?.genres}
              seasonsInfo={film?.seasonsInfo}
              filmLength={film?.movieLength}
            />
          </div>
        </div>
        <div>
          <span className='font-bold text-amber-600 text-xl base:text-2xl'>{film?.rating.kp.toFixed(1) || "НД"}</span>
        </div>
      </section>
    </>
  );
};
