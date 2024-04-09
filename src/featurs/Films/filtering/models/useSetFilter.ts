import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const useSetFilter = (name: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<undefined | string | null>(searchParams.get(name));

  useEffect(() => {
    console.log(name);
    if (value && value !== "null") {
      searchParams.set(name, value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(name);
      setSearchParams(searchParams);
    }
  }, [value, setValue]);

  return {
    setValue,
    value,
  };
};
