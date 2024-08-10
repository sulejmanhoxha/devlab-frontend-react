import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// custom hook
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider",
    );
  }
  return context;
}
