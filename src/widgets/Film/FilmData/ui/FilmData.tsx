import { isMobile } from "react-device-detect";
import { FilmDesktop, FilmMobile } from "@/widgets/Film";

export const FilmData = () => {
  return <>{isMobile ? <FilmMobile /> : <FilmDesktop />}</>;
};
