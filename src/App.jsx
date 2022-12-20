import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Views
import Header from "./views/Header/Header";
import Home from "./views/Home/Home";

//Componentes
import GlobalStyle from "./global/GlobalStyle";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { ThemeAppContext } from "./contexts/ThemeAppProvider";

function App() {
  const { darkThemeState } = useContext(ThemeAppContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkThemeState ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/countries-app/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
