import { FilmsListItem, useQueryFilms } from "@/entities";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { transformSearchParams, Wrapper } from "@/shared";
import { useAppContext } from "@/app";

export const FilmsList = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.entries();

  const { setPageCount } = useAppContext();
  const { data: films, refetch, isSuccess } = useQueryFilms(transformSearchParams(params));

  useEffect(() => {
    refetch();
  }, [searchParams]);

  useEffect(() => {
    if (isSuccess) {
      setPageCount(films?.pages);
    }
  }, [isSuccess]);

  return (
    <>
      <section className='flex flex-col gap-2.5 md:gap-5'>
        {films?.docs?.map((film) => <FilmsListItem film={film} key={film.id} />)}
      </section>
    </>
  );
};
