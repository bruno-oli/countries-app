import React, { createContext, useState } from "react";

export const ThemeAppContext = createContext();

function ThemeAppProvider({ children }) {
  const [darkThemeState, setDarkThemeState] = useState(true);
  return (
    <ThemeAppContext.Provider
      value={{
        darkThemeState,
        setDarkThemeState,
      }}
    >
      {children}
    </ThemeAppContext.Provider>
  );
}
export default ThemeAppProvider;
