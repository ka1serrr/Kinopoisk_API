import { routes } from "@/app";
import { Button, useChangeRoute, Wrapper } from "@/shared";
import { Films } from "@/widgets/Films/FilmList";
import { Filters } from "@/widgets/Films";
import { SearchInput } from "@/featurs";
import { FilmPagination } from "@/entities";
import { Link } from "react-router-dom";

const MainPage = () => {
  useChangeRoute(routes.mainPage, routes.filmsPage);

  return (
    <Wrapper>
      <div className='flex items-center justify-between flex-col sm:flex-row mb-2'>
        <h1 className='text-4xl font-bold mb-3 text-center sm:text-left'>Все фильмы</h1>
        <Link to={routes.randomFilm}>
          <Button variant='outline'>Мне повезёт</Button>
        </Link>
      </div>
      <Filters />
      <SearchInput />
      <Films />
      <FilmPagination />
    </Wrapper>
  );
};

export default MainPage;
