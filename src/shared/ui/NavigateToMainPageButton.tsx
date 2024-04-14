import { useNavigate } from "react-router";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/shared";

export const NavigateToMainPageButton = () => {
  const navigate = useNavigate();

  const navigateParams = sessionStorage.getItem("params") || "";

  return (
    <Button className='mb-2' variant='ghost' onClick={() => navigate({ pathname: "/films", search: navigateParams })}>
      <ArrowBigLeft />
    </Button>
  );
};
