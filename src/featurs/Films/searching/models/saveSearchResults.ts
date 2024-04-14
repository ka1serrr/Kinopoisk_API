import { useCallback, useState } from "react";

export const useSearchResults = () => {
  const saveSearchResults = useCallback((result: string) => {
    const searches = JSON.parse(localStorage.getItem("searches") || "[]") || [];

    if (searches.includes(result.trim().toLowerCase())) {
      return;
    }

    searches.push(result.trim().toLowerCase());

    if (searches.length > 4) {
      searches.shift();
    }

    localStorage.setItem("searches", JSON.stringify(searches));

    return;
  }, []);

  const [searchResult, setSearchResult] = useState<string[]>(JSON.parse(localStorage.getItem("searches") || "[]"));

  return {
    saveSearchResults,
    results: searchResult,
  };
};
