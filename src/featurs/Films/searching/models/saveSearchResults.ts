import { useCallback, useEffect, useState } from "react";

export const useSearchResults = () => {
  const saveSearchResults = useCallback((result: string) => {
    const searches = JSON.parse(localStorage.getItem("searches") || "[]") || [];
    searches.push(result);

    if (searches.length > 4) {
      searches.shift();
    }

    if (searches.indexOf(result.trim()) === -1) {
      return;
    }

    localStorage.setItem("searches", JSON.stringify(searches));
  }, []);

  const [searchResult, setSearchResult] = useState<string[]>(JSON.parse(localStorage.getItem("searches") || "[]"));

  return {
    saveSearchResults,
    results: searchResult,
  };
};
