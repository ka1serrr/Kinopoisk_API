import { FilmsListItem, useQueryFilms } from "@/entities";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader, transformSearchParams, ErrorMessage } from "@/shared";
import { useAppContext } from "@/app";

export const FilmsList = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.entries();

  const { setPageCount } = useAppContext();
  const { data: films, refetch, isSuccess, isLoading, isError, error } = useQueryFilms(transformSearchParams(params));

  useEffect(() => {
    refetch();
  }, [searchParams]);

  useEffect(() => {
    if (isSuccess) {
      setPageCount(films?.pages);
    }
  }, [isSuccess]);

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      {isLoading ? (
        <div className='h-screen flex items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <section className='flex flex-col gap-2.5 md:gap-5'>
          {films?.docs?.map((film) => <FilmsListItem film={film} key={film.id} />)}
        </section>
      )}
    </>
  );
};
