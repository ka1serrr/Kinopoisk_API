export const transformDataObject = (genres: { name: string }[]) => {
  return genres
    .map((genre) => Object.values(genre))
    .flat()
    .join(", ");
};
