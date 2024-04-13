import {
  AGE_RATING_FILTER_DATA,
  COUNTRY_FILTER_DATA,
  LIMIT_FILTER_DATA,
  useSetFilter,
  YEAR_FILTER_DATA,
} from "@/featurs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared";
import { useSearchParams } from "react-router-dom";

export const YearFilter = () => {
  const { value, setValue } = useSetFilter("year");

  return (
    <Select value={String(value)} defaultValue={String(value)} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Все годы' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='null'>Все годы</SelectItem>
        {YEAR_FILTER_DATA.map((filter) => (
          <SelectItem key={filter} value={filter}>
            {filter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const AgeFilter = () => {
  const { value, setValue } = useSetFilter("ageRating");

  return (
    <Select value={String(value)} defaultValue={String(value)} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Все годы' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='null'>Любой возраст</SelectItem>
        {AGE_RATING_FILTER_DATA.map((filter) => (
          <SelectItem key={filter} value={filter}>
            {filter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const CountryFilter = () => {
  const { value, setValue } = useSetFilter("countries.name");

  return (
    <Select value={String(value)} defaultValue={String(value)} onValueChange={(value) => setValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Все годы' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='null'>Любая страна</SelectItem>
        {COUNTRY_FILTER_DATA.map((filter) => (
          <SelectItem key={filter} value={filter}>
            {filter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const LimitFilter = () => {
  const { value, setValue } = useSetFilter("limit");

  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleChange = (value: string) => {
    setValue(String(value));
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  return (
    <Select value={String(value)} defaultValue={String(value)} onValueChange={(value) => onHandleChange(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Все годы' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='10'>Отображать по 10</SelectItem>
        {LIMIT_FILTER_DATA.map((filter) => (
          <SelectItem key={filter.text} value={filter.value}>
            {filter.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
