import { FC, LegacyRef, useEffect } from "react";
import { Loader, useOutsideClick } from "@/shared";
import { X } from "lucide-react";
import { Film, PreviewedFilms } from "@/entities";

type Props = {
  results: string[];
  setSearchValue: (value: string) => void;
  searchValue: string;
  isLoading: boolean;
  films: Film<string, string>[] | undefined;
};

export const PrevResult: FC<Props> = (props) => {
  const { ref, setIsActive, isActive } = useOutsideClick(true);

  const { results, setSearchValue, searchValue, isLoading, films } = props;

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    console.log(isLoading);
    if (!isActive) {
      setSearchValue("");
      timerId = setTimeout(() => {
        setIsActive(true);
      }, 1);
    }

    return () => clearTimeout(timerId);
  }, [isActive, searchValue]);

  return (
    <>
      {searchValue && isActive && (
        <>
          <div
            className='bg-white rounded-b-md  absolute z-40 w-full'
            ref={ref as unknown as LegacyRef<HTMLDivElement>}
          >
            <X
              className='absolute right-2 top-[-33px] z-40 cursor-pointer'
              onClick={() => setIsActive(!isActive)}
              size={20}
            />
            <div className='border-b border-b-black flex flex-col gap-1.5 pb-1'>
              {results.map((result) => (
                <div
                  key={result}
                  className='p-1 rounded-md w-full hover:bg-gray-400 transition-all text-sm cursor-pointer duration-100'
                  onClick={() => setSearchValue(result)}
                >
                  {result}
                </div>
              ))}
            </div>

            {isLoading ? <Loader /> : films && <PreviewedFilms films={films} />}
          </div>
        </>
      )}
    </>
  );
};
