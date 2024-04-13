import { LoginProtector, Wrapper } from "@/shared";

const RandomFilmPage = () => {
  return (
    <LoginProtector>
      <Wrapper>{}</Wrapper>
    </LoginProtector>
  );
};

export default RandomFilmPage;
