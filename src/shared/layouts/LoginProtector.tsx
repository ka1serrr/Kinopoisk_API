import { FC, ReactNode } from "react";
import { routes } from "@/app";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const LoginProtector: FC<Props> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") || "";

  if (!isLoggedIn) {
    return <Navigate to={routes.loginPage} replace />;
  }

  return <>{children}</>;
};
