import { useParams } from "react-router-dom";
import {
  FilmActorsDesktop,
  FilmDataDesktop,
  FilmPostersDesktop,
  FilmReviews,
  FilmSeriesDesktop,
  SimilarMovies,
  useFilmDataQuery,
} from "@/entities";
import { Divider, ErrorMessage, Loader, NavigateToMainPageButton } from "@/shared";

export const FilmDesktop = () => {
  const { id } = useParams();
  const { data: film, isLoading, isError, error } = useFilmDataQuery(id as string);

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen'>
          <Loader />
        </div>
      ) : (
        <>
          <NavigateToMainPageButton />
          <FilmDataDesktop film={film} />
          <FilmPostersDesktop />
          <Divider className='mt-4' />
          <div className='flex justify-center gap-4'>
            <FilmActorsDesktop />
            {film?.isSeries && <FilmSeriesDesktop />}
          </div>
          <Divider className='mt-4' />
          <SimilarMovies similarMovies={film?.similarMovies} />
          <Divider className='mt-4' />
          <FilmReviews />
        </>
      )}
    </>
  );
};
