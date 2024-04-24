import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
}