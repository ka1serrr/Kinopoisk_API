import { LoaderCircle } from "lucide-react";

export const Loader = () => {
  return (
    <div className='w-full flex items-center justify-center p-2'>
      <LoaderCircle size={54} className='animate-spin' />
    </div>
  );
};
