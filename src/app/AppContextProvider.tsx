import React, { createContext, useState, useContext, useMemo, FC, ReactNode } from "react";

interface AppContextType {
  pageCount: number | undefined;
  setPageCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [pageCount, setPageCount] = useState<number | undefined>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const contextValue = useMemo<AppContextType>(
    () => ({ pageCount, setPageCount, isLoggedIn, setIsLoggedIn }),
    [pageCount, isLoggedIn],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext должен быть внутри AppProvider");
  }
  return context;
};
