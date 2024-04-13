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
import { Divider, Loader } from "@/shared";

export const FilmDesktop = () => {
  const { id } = useParams();
  const { data: film, isLoading } = useFilmDataQuery(id as string);

  return (
    <>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen'>
          <Loader />
        </div>
      ) : (
        <>
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
