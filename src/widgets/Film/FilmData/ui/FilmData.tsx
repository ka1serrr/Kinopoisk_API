import { isMobile } from "react-device-detect";
import {
  FilmActorsDesktop,
  FilmDataDesktop,
  FilmPostersDesktop,
  useFilmDataQuery,
  FilmSeriesDesktop,
} from "@/entities";
import { useParams } from "react-router-dom";
import { Divider, Loader } from "@/shared";

export const FilmData = () => {
  const { id } = useParams();
  const { data: film, isLoading } = useFilmDataQuery(id as string);

  return (
    <>
      {isMobile ? null : (
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
            </>
          )}
        </>
      )}
    </>
  );
};
