import { Wrapper } from "@/shared";
import { FilmData } from "@/widgets/Film";
import { clsx } from "clsx";
import { isMobile } from "react-device-detect";

const FilmPage = () => {
  return (
    <Wrapper className={clsx({ "max-w-1000px": isMobile })}>
      <FilmData />
    </Wrapper>
  );
};

export default FilmPage;
