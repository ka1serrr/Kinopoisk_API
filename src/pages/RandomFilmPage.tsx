import { Button, LoginProtector, NavigateToMainPageButton, Wrapper } from "@/shared";
import {
  RandomCountryFilter,
  RandomGenreFilter,
  RandomNetworkFilter,
  RandomRatingFilter,
  RandomTypeFilter,
  RandomYearFilter,
  useMakeQueryToString,
  useRandomFilmQuery,
} from "@/featurs";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { Loader2 } from "lucide-react";
import { routes } from "@/app";

const RandomFilmPage = () => {
  const [genre, setGenre] = useState<string | undefined>(undefined);

  const [country, setCountry] = useState<string | undefined>(undefined);

  const [type, setType] = useState<string | undefined>(undefined);

  const [year, setYear] = useState<string | undefined>(undefined);

  const [netWork, setNetWork] = useState<string | undefined>(undefined);

  const [rating, setRating] = useState<string | undefined>(undefined);

  const queryString = useMakeQueryToString({ type, rating, netWork, country, year, genre });

  const { refetch, isLoading, data } = useRandomFilmQuery(queryString);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await refetch();
    await navigate(`${routes.filmsPage}/${data?.id}`);
  };

  return (
    <LoginProtector>
      <Wrapper>
        <div className='flex justify-between flex-col sm:flex-row mb-2'>
          <NavigateToMainPageButton />
          <h1 className='text-4xl font-bold mt-2 md:mt-0 text-center sm:text-left'>Случайный фильм</h1>
        </div>
        <section className='flex flex-col gap-3 '>
          <RandomGenreFilter value={genre} setValue={setGenre} />
          <RandomCountryFilter value={country} setValue={setCountry} />
          <RandomTypeFilter value={type} setValue={setType} />
          <RandomYearFilter value={year} setValue={setYear} />
          <RandomRatingFilter value={rating} setValue={setRating} />
          <RandomNetworkFilter value={netWork} setValue={setNetWork} />
          <Button disabled={isLoading} onClick={() => handleSubmit()}>
            {isLoading ? <Loader2 className='animate-spin' /> : "Мне повезёт!"}
          </Button>
        </section>
      </Wrapper>
    </LoginProtector>
  );
};

export default RandomFilmPage;
