import { cn } from "@/shared";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-0.5 bg-gray-300 w-full", className)}></div>;
};
