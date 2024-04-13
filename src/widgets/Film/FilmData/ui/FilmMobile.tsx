import { useParams } from "react-router-dom";
import {
  FilmActorsDesktop,
  FilmDataMobile,
  FilmPostersDesktop,
  FilmReviews,
  FilmSeriesDesktop,
  SimilarMovies,
  useFilmDataQuery,
} from "@/entities";
import { Divider } from "@/shared";

export const FilmMobile = () => {
  const { id } = useParams();
  const { data: film, isLoading } = useFilmDataQuery(id as string);

  return (
    <>
      <FilmDataMobile film={film} />
      <FilmActorsDesktop />
      {film?.isSeries && <FilmSeriesDesktop />}
      <FilmPostersDesktop />
      <Divider />
      <SimilarMovies similarMovies={film?.similarMovies} />
      <Divider className='my-2' />
      <FilmReviews />
    </>
  );
};
