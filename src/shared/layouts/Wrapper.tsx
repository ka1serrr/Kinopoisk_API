import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode | string;
};

export const Wrapper: FC<Props> = ({ children }) => {
  return <main className='container'>{children}</main>;
};
