import { Input, useDebounceValue, useOutsideClick } from "@/shared";
import { useEffect, useState } from "react";
import { PrevResult, useSearchFilmQuery, useSearchResults } from "@/featurs";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounceValue(searchValue, 1000);

  const { data, isLoading, isError, isSuccess } = useSearchFilmQuery(debouncedSearch);

  const { results, saveSearchResults } = useSearchResults();

  useEffect(() => {
    if (isSuccess) {
      saveSearchResults(searchValue);
    }
  }, [isSuccess]);

  return (
    <div className='my-4 relative'>
      <Input
        className='mb-1 pr-5'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Введите название фильма'
      />
      <PrevResult
        results={results}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        isLoading={isLoading}
        films={data?.docs}
      />
    </div>
  );
};
