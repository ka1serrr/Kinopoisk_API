export const transformSearchParams = (searchParams: IterableIterator<[string, string]>): string => {
  const arrayedParams = Array.from(searchParams);
  if (searchParams) {
    const filteredParams = arrayedParams
      .filter((param) => param[1] !== undefined && param[1] !== null && param[1] !== "")
      .reduce((acc, [key, value]) => {
        return acc + `${key}=${value}&`;
      }, "");

    if (filteredParams[filteredParams.length - 1] === "&") {
      return filteredParams.slice(0, -1);
    }

    return filteredParams;
  }
  return "";
};
