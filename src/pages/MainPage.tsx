import { routes } from "@/app";
import { useChangeRoute, Wrapper } from "@/shared";
import { Films } from "@/widgets/Films/FilmList";
import { Filters } from "@/widgets/Films";
import { SearchInput } from "@/featurs";

const MainPage = () => {
  useChangeRoute(routes.mainPage, routes.filmsPage);

  return (
    <Wrapper>
      <Filters />
      <SearchInput />
      <Films />
    </Wrapper>
  );
};

export default MainPage;
