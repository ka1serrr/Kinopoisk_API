export const transformDataObject = (genres: { name: string }[] | string) => {
  if (typeof genres !== "string") {
    return genres
      .map((genre) => Object.values(genre))
      .flat()
      .join(", ");
  }
  return genres;
};
