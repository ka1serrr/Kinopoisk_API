import { SingleFilm } from "@/entities";
import { FC } from "react";
import { NO_DATA_TEXT } from "@/app";
import { clsx } from "clsx";
import ProgressiveImage from "react-progressive-graceful-image";

type Props = {
  film: SingleFilm | undefined;
};

export const FilmDataMobile: FC<Props> = ({ film }) => {
  return (
    <section>
      <div className='flex items-center justify-center flex-col'>
        <ProgressiveImage placeholder={film?.poster?.previewUrl} src={String(film?.poster?.url)}>
          {(src, loading) => (
            <img
              className={clsx("w-3/4", {
                "blur-md": loading,
              })}
              src={src}
              alt={`Картинка к фильму ${film?.name}`}
              loading='lazy'
            />
          )}
        </ProgressiveImage>
        <h1 className='text-4xl font-bold'>{film?.name}</h1>
      </div>
      <p className='text-justify mt-2'>{film?.shortDescription || NO_DATA_TEXT.noDescr}</p>

      <div className='text-center font-bold text-5xl text-amber-500 mt-2'>{film?.rating?.kp.toFixed(1) || "НД"}</div>
    </section>
  );
};
