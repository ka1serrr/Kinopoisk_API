import {
  useGenresQuery,
  useCountryFilters,
  useTypeQuery,
  FILTERS_NETWORKS_DATA,
  FILTERS_RATING_DATA,
  YEAR_FILTER_DATA,
} from "@/featurs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared";
import { FC } from "react";

type Props = {
  value: string | undefined;
  setValue: (value: string) => void;
};

export const RandomGenreFilter: FC<Props> = ({ value, setValue }) => {
  const { data, isLoading } = useGenresQuery();

  return (
    <Select value={value} disabled={isLoading} onValueChange={(value) => setValue(value)}>
      <SelectTrigger className='capitalize'>
        <SelectValue placeholder='Все жанры' />
      </SelectTrigger>
      <SelectContent className='capitalize'>
        <SelectItem value='null'>Любой жанр</SelectItem>
        {data?.map((filter) => (
          <SelectItem key={filter.slug} value={filter.slug}>
            {filter.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const RandomCountryFilter: FC<Props> = ({ value, setValue }) => {
  const { data, isLoading } = useCountryFilters();

  return (
    <Select value={value} disabled={isLoading} onValueChange={(value) => setValue(value)}>
      <SelectTrigger className='capitalize'>
        <SelectValue placeholder='Любая страна' />
      </SelectTrigger>
      <SelectContent className='capitalize'>
        <SelectItem value='null'>Любая страна</SelectItem>
        {data?.map((filter) => (
          <SelectItem key={filter.slug} value={filter.slug}>
            {filter.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const RandomTypeFilter: FC<Props> = ({ value, setValue }) => {
  const { data, isLoading } = useTypeQuery();

  return (
    <Select value={value} disabled={isLoading} onValueChange={(value) => setValue(value)}>
      <SelectTrigger className='capitalize'>
        <SelectValue placeholder='Любой тип' />
      </SelectTrigger>
      <SelectContent className='capitalize'>
        <SelectItem value='null'>Любой тип</SelectItem>
        {data?.map((filter) => (
          <SelectItem key={filter.slug} value={filter.slug}>
            {filter.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const RandomYearFilter: FC<Props> = ({ value, setValue }) => {
  return (
    <Select value={value} defaultValue={value} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Любой год' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='null'>Любой год</SelectItem>
        {YEAR_FILTER_DATA.map((filter) => (
          <SelectItem key={filter} value={filter}>
            {filter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const RandomRatingFilter: FC<Props> = ({ value, setValue }) => {
  return (
    <Select value={value} defaultValue={value} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Любой рейтинг' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='null'>Любой рейтинг</SelectItem>
        {FILTERS_RATING_DATA.map((filter) => (
          <SelectItem key={filter.slug} value={filter.slug}>
            {filter.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const RandomNetworkFilter: FC<Props> = ({ value, setValue }) => {
  return (
    <Select value={value} defaultValue={value} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Любой производитель' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='null'>Любой производитель’</SelectItem>
        {FILTERS_NETWORKS_DATA.map((filter) => (
          <SelectItem key={filter} value={filter}>
            {filter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
