import { routes } from "@/app";
import { Pagination, useChangeRoute, Wrapper } from "@/shared";
import { Films } from "@/widgets/Films/FilmList";
import { Filters } from "@/widgets/Films";
import { SearchInput } from "@/featurs";
import { FilmPagination } from "@/entities";

const MainPage = () => {
  useChangeRoute(routes.mainPage, routes.filmsPage);

  return (
    <Wrapper>
      <h1 className='text-4xl font-bold mb-3'>Все фильмы</h1>
      <Filters />
      <SearchInput />
      <Films />
      <FilmPagination />
    </Wrapper>
  );
};

export default MainPage;
