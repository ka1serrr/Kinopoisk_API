import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() => import("@/pages/MainPage"));
const FilmPage = lazy(() => import("@/pages/FilmPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));

export const routes = {
  mainPage: "/",
  filmsPage: "/films",
  filmPage: "/films/:id",
  loginPage: "/login",
};

export const router = createBrowserRouter([
  {
    path: routes.filmsPage,
    element: <MainPage />,
  },
  {
    path: routes.filmPage,
    element: <FilmPage />,
  },
  {
    path: routes.mainPage,
    element: <MainPage />,
  },
  {
    path: routes.loginPage,
    element: <LoginPage />,
  },
]);
