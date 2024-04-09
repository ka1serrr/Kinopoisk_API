import { Film } from "../types";
import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared";
import { Link } from "react-router-dom";
import { routes } from "@/app";
import { transformSeriesLengthText } from "@/entities";

type Props = {
  film: Film<string, string>;
};

export const FilmsListItem: FC<Props> = ({ film }) => {
  return (
    <Card className='md:flex' key={film.id}>
      <Link to={`${routes.filmsPage}/${film.id}`}>
        <CardHeader className='flex flex-col items-center md:block md:w-[400px] basis-1/3 shrink-0'>
          <CardTitle>{film.name}</CardTitle>
          <img className='w-[200px] md:w-[250px]' src={film.poster.previewUrl} alt={`Картинка к фильму ${film.name}`} />
        </CardHeader>
      </Link>
      <CardContent className='grow shrink'>
        <CardDescription>{film.shortDescription ? film.shortDescription : "Описания нет"}</CardDescription>
        <div className='text-base md:text-xl mt-2'>
          Жанры: <span className='font-bold'>{film.genres}</span>
        </div>
        <span className='block font-bold'>Год выпуска: {film.year}</span>
        <span className='block'>Страна: {film.countries}</span>
        <span className='block'>{transformSeriesLengthText(film.isSeries, film.seriesLength, film.movieLength)}</span>
      </CardContent>
    </Card>
  );
};
