import { Wrapper } from "@/shared";
import { LoaderCircle } from "lucide-react";

export const LoadingPage = () => {
  return (
    <Wrapper>
      <div className='w-full flex items-center justify-center h-screen'>
        <LoaderCircle className='animate-spin block' size={54} />
      </div>
    </Wrapper>
  );
};
