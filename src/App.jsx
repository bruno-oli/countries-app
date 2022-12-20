import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Views
import Header from "./views/Header/Header";
import Home from "./views/Home/Home";

//Componentes
import GlobalStyle from "./components/GlobalStyle"
import Theme from "./components/Theme"

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/countries-app/" element={<Home />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
