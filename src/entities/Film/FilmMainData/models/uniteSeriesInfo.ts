import { SeasonInfo } from "@/entities";
import { numWords } from "@/shared";

export const uniteSeasonsInfo = (seasons: SeasonInfo[]) => {
  let seasonsCount = 0;
  let seriesCount = 0;

  for (const season of seasons) {
    if (season.number !== undefined) {
      seasonsCount += 1;
    } else {
      continue;
    }

    if (season.episodesCount !== undefined) {
      seriesCount += season.episodesCount;
    }
  }

  return `${seasonsCount} ${numWords(seasonsCount, ["сезон", "сезона", "сезонов"])} ${seriesCount} ${numWords(
    seriesCount,
    ["серия", "серии", "серий"],
  )}`;
};
