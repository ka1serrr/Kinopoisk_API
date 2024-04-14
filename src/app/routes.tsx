import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = lazy(() => import("@/pages/MainPage"));
const FilmPage = lazy(() => import("@/pages/FilmPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RandomFilmPage = lazy(() => import("@/pages/RandomFilmPage"));

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const routes = {
  mainPage: "/",
  filmsPage: "/films",
  filmPage: "/films/:id",
  loginPage: "/login",
  randomFilm: "/random",
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
  {
    path: routes.randomFilm,
    element: <RandomFilmPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
