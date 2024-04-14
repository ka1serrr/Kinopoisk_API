import { Button, Input, LoginnedProtector, Wrapper } from "@/shared";
import { routes, useAppContext } from "@/app";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const { setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate(routes.filmsPage);
  };

  return (
    <LoginnedProtector>
      <Wrapper>
        <form className='h-screen flex flex-col items-center justify-center' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-bold mb-2'>Логин</h1>
          <div className='w-1/3'>
            <Input className='mb-2' type='email' placeholder='Введите вашу почту' required />
            <Input className='mb-2' type='password' placeholder='Введите ваш пароль' required />
            <Button variant='outline' className='w-full'>
              Логин
            </Button>
          </div>
        </form>
      </Wrapper>
    </LoginnedProtector>
  );
};

export default LoginPage;
