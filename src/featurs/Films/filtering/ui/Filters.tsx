import { AGE_RATING_FILTER_DATA, COUNTRY_FILTER_DATA, useSetFilter, YEAR_FILTER_DATA } from "@/featurs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared";

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

// TODO: fetch countries from api

export const CountryFilter = () => {
  const { value, setValue } = useSetFilter("country");

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
