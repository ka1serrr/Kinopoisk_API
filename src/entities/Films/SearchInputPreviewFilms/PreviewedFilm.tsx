import { Film } from "@/entities";
import { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/app";

type Props = {
  film: Film<string, string>;
};

export const PreviewedFilm: FC<Props> = ({ film }) => {
  return (
    <Link
      to={`${routes.filmsPage}/${film.id}`}
      className='w-full py-2 px-1 hover:bg-gray-400 transition-all duration-150 cursor-pointer rounded flex justify-between'
    >
      <div className='w-1/2 basis-1/2'>
        <span className='block text-base font-bold mb-2'>{film.name}</span>
        {film.poster.previewUrl ? (
          <img className='w-[85px]' src={film.poster.previewUrl} alt='' />
        ) : (
          <span className='block'>У фильма нет постера</span>
        )}
      </div>
      <div className='flex-shrink w-1/2'>
        <span className='block'>
          Год выпуска: <span className='font-bold'>{film.year}</span>
        </span>
        <span className='break-words'>Жанры: {film.genres}</span>
      </div>
    </Link>
  );
};
