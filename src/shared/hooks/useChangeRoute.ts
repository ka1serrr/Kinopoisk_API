import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export const useChangeRoute = (from: string, to: string) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  useLayoutEffect(() => {
    if (location.pathname === from) {
      navigate(to);
    }
  }, [location]);

  useEffect(() => {
    if (!searchParams.get("page") || !searchParams.get("limit")) {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
      searchParams.set("limit", "10");
      setSearchParams(searchParams);
    }
  }, []);
};
