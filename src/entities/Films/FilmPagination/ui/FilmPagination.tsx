import { Pagination } from "@/shared";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "@/app";

export const FilmPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { pageCount } = useAppContext();

  const setPagePagination = (number: number) => {
    searchParams.set("page", String(number));
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      onPageChange={setPagePagination}
      pageCount={pageCount}
      forcePage={Number(searchParams.get("page")) - 1}
    />
  );
};
