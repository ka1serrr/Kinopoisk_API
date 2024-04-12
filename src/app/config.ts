const TOKEN = process.env.REACT_APP_TOKEN || "";

export const config = {
  API_URL: "https://api.kinopoisk.dev/v1.4/",
  TOKEN,
};

export const NO_DATA_TEXT = {
  noDescr: "Нет описания",
  noData: "Не указано",
} as const;
