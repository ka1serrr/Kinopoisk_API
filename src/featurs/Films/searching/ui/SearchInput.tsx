import { Input, useDebounceValue } from "@/shared";
import { useState } from "react";
import { useSearchFilmQuery } from "@/featurs";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounceValue(searchValue, 1000);

  const {} = useSearchFilmQuery(debouncedSearch);

  return (
    <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Введите название фильма' />
  );
};
