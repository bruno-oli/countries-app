import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    Blue: "hsl(209, 23%, 22%)",
    DarkBlue: "hsl(207, 26%, 17%)",
    VeryDarkBlue: "hsl(200, 15%, 8%)",
    DarkGray: "hsl(0, 0%, 52%)",
    VeryLightGray: "hsl(0, 0%, 98%)",
    White: "hsl(0, 0%, 100%)",
  },
  fontSizes: {
    homePage: "1em",
    detailPage: "1.15em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
