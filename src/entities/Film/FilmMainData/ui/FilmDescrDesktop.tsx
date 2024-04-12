import { FC } from "react";
import { type stringOrUndefined } from "@/shared";
import { NO_DATA_TEXT } from "@/app";
import { SeasonInfo, uniteSeasonsInfo } from "@/entities";

type Props = {
  ageRating: stringOrUndefined;
  countries: stringOrUndefined;
  genres: stringOrUndefined;
  filmLength: number | undefined;
  isSeries: boolean | undefined;
  seasonsInfo: SeasonInfo[] | undefined;
};

export const FilmDescrDesktop: FC<Props> = (props) => {
  const { filmLength, genres, countries, ageRating, isSeries, seasonsInfo } = props;

  return (
    <>
      <div className='flex'>
        <div className='w-1/3'>Возраст:</div>
        <div className='flex-grow'>
          <span>{ageRating || NO_DATA_TEXT.noData}</span>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/3'>Страна:</div>
        <div className='flex-grow'>
          <span>{countries || NO_DATA_TEXT.noData}</span>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/3'>Длительность:</div>
        <div className='flex-grow'>
          {isSeries ? (
            <span>{seasonsInfo?.length === 0 ? NO_DATA_TEXT.noData : uniteSeasonsInfo(seasonsInfo || [])}</span>
          ) : (
            <span>{filmLength} минут</span>
          )}
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/3'>Жанры:</div>
        <div className='flex-grow'>
          <span>{genres || NO_DATA_TEXT.noData}</span>
        </div>
      </div>
    </>
  );
};
