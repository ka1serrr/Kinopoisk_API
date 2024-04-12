export const transformDataObject = (genres: { name: string }[] | string) => {
  return (
    genres
      // @ts-ignore
      .map((genre) => Object.values(genre))
      .flat()
      .join(", ")
  );
};
