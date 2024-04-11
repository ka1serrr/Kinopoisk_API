import { Pagination } from "@/shared";
import { useSearchParams } from "react-router-dom";

export const FilmPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setPagePagination = (number: number) => {
    searchParams.set("page", String(number));
    setSearchParams(searchParams);
  };

  return (
    <Pagination onPageChange={setPagePagination} pageCount={10} forcePage={Number(searchParams.get("page")) - 1} />
  );
};
