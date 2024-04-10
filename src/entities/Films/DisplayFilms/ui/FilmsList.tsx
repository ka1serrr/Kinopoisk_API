import { FilmsListItem, useQueryFilms } from "@/entities";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { transformSearchParams, Wrapper } from "@/shared";

export const FilmsList = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.entries();

  const { data: films, refetch } = useQueryFilms(transformSearchParams(params));

  useEffect(() => {
    refetch();
    console.log(films);
  }, [searchParams]);

  return (
    <>
      <section className='flex flex-col gap-2.5 md:gap-5'>
        {films?.docs?.map((film) => <FilmsListItem film={film} key={film.id} />)}
      </section>
    </>
  );
};
