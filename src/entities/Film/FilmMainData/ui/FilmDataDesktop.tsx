import { FilmDescrDesktop, SingleFilm } from "@/entities";
import { NO_DATA_TEXT } from "@/app";
import { FC, useEffect } from "react";

type Props = {
  film: SingleFilm | undefined;
};
export const FilmDataDesktop: FC<Props> = ({ film }) => {
  useEffect(() => {
    console.log(film?.persons);
  }, [film]);

  return (
    <>
      <section className='flex justify-between'>
        <img className='block flex-shrink-0 w-[100px] base:w-1/3 md:w-[300px]' src={film?.poster.previewUrl} alt='' />
        <div className='basis-3/5'>
          <h1 className='text-xl md:text-4xl font-bold mb-4'>{film?.name}</h1>
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
