import { FC, ReactNode } from "react";
import { cn } from "@/shared";

type Props = {
  children: ReactNode | string;
  className?: string;
};

export const Wrapper: FC<Props> = ({ children, className }) => {
  return <main className={cn("container", { className })}>{children}</main>;
};
