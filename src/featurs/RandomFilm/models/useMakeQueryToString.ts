import { useState } from "react";

type Query = string | undefined | "null";

type Props = {
  genre: Query;
  country: Query;
  type: Query;
  year: Query;
  rating: Query;
  netWork: Query;
};

export const useMakeQueryToString = (queryObject: Props) => {
  const [queries, setQueries] = useState(queryObject);

  let stringifiedQuery = "?";

  if (queries.country && queries.country !== "null") {
    stringifiedQuery += `countries.name=${queries.country}&`;
  }

  if (queries.genre && queries.genre !== "null") {
    stringifiedQuery += `genres.name=${queries.genre}&`;
  }

  if (queries.year && queries.year !== "null") {
    stringifiedQuery += `year=${queries.year}&`;
  }

  if (queries.netWork && queries.netWork !== "null") {
    stringifiedQuery += `netWork.items.name=${queries.netWork}&`;
  }

  if (queries.rating && queries.rating !== "null") {
    stringifiedQuery += `rating.kp=${queries.rating}&`;
  }

  if (stringifiedQuery.length === 0) {
    return "";
  }

  return stringifiedQuery.slice(0, -1);
};
