import { numWords } from "@/shared";

export const transformSeriesLengthText = (isSeries: boolean, seriesLength: number, movieLength: number): string => {
  if (isSeries && seriesLength) {
    return `Продолжительность ${seriesLength} ${numWords(seriesLength, ["серия", "серии", "серий"])}`;
  }
  if (isSeries && !seriesLength) {
    return `Продолжительность: неизвестно`;
  }

  return `Продолжительность ${movieLength} ${numWords(movieLength, ["минута", "минуты", "минут"])}`;
};
