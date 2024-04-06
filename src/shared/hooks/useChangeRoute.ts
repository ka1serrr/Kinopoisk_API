import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const useChangeRoute = (from: string, to: string) => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (location.pathname === from) {
      navigate(to);
    }
  }, [location]);
};
