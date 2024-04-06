import { routes } from "@/app";
import { useChangeRoute } from "@/shared";

const MainPage = () => {
  useChangeRoute(routes.mainPage, routes.filmsPage);

  return <div>MainPage</div>;
};

export default MainPage;
