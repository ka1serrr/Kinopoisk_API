import { useState, useEffect, useRef } from "react";

export const useOutsideClick = (initialValue: boolean) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { ref, isActive, setIsActive };
};
