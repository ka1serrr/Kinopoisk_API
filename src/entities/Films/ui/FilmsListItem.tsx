import { Film } from "../types";
import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared";
import { Link } from "react-router-dom";
import { routes } from "@/app";

type Props = {
  film: Film<string, string>;
};

export const FilmsListItem: FC<Props> = ({ film }) => {
  return (
    <Card className='md:flex' key={film.id}>
      <Link to={`${routes.filmsPage}/${film.id}`}>
        <CardHeader className='flex flex-col items-center md:block grow-[2] basis-1/3 shrink-0'>
          <CardTitle>{film.name}</CardTitle>
          <img className='w-[200px] md:w-[250px]' src={film.poster.previewUrl} alt={`Картинка к фильму ${film.name}`} />
        </CardHeader>
      </Link>
      <CardContent className='grow shrink'>
        <CardDescription>{film.shortDescription}.</CardDescription>
        <div className='text-base md:text-xl mt-2'>
          Жанры: <span className='font-bold'>{film.genres as unknown as string}</span>
        </div>
        <span className='block font-bold'>Год выпуска: {film.year}</span>
        <span className='block'>Страна: {film.countries}</span>
        <span className='block'>
          Продолжительность: {film.isSeries ? `${film.movieLength} серий` : `${film.movieLength} минут`}
        </span>
      </CardContent>
    </Card>
  );
};
