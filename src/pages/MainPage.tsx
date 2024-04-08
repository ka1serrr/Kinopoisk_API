import { routes } from "@/app";
import { useChangeRoute } from "@/shared";
import { Films } from "@/widgets/Films";

const MainPage = () => {
  useChangeRoute(routes.mainPage, routes.filmsPage);

  return <Films />;
};

export default MainPage;
