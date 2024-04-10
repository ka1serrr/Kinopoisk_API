import { Film, PreviewedFilm } from "@/entities";
import { FC } from "react";

type Props = {
  films: Film<string, string>[];
};

export const PreviewedFilms: FC<Props> = ({ films }) => {
  return (
    <div className='py-4 rounded'>
      {films.map((film) => (
        <PreviewedFilm film={film} />
      ))}
    </div>
  );
};
