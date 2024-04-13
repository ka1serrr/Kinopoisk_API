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
import { Divider, ErrorMessage, NavigateToMainPageButton } from "@/shared";

export const FilmMobile = () => {
  const { id } = useParams();
  const { data: film, isLoading, isError, error } = useFilmDataQuery(id as string);

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className='relative'>
      <NavigateToMainPageButton />
      <FilmDataMobile film={film} />
      <FilmActorsDesktop />
      {film?.isSeries && <FilmSeriesDesktop />}
      <FilmPostersDesktop />
      <Divider />
      <SimilarMovies similarMovies={film?.similarMovies} />
      <Divider className='my-2' />
      <FilmReviews />
    </div>
  );
};
