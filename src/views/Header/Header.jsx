import React, { useContext } from "react";
import styled from "styled-components";

//Icones
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

import { ThemeAppContext } from "../../contexts/ThemeAppProvider";
import BoxShadow from "../../global/BoxShadow"

const Wrapper = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.element};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  box-shadow: ${BoxShadow};
  h1 {
    font-size: 1.5em;
    color: ${(props) => props.theme.colors.text};
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1em;
  color: ${(props) => props.theme.colors.text};
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      font-size: 1.5em;
    }
  }
`;

const Header = () => {
  const { darkThemeState, setDarkThemeState } = useContext(ThemeAppContext);
  function toggleTheme() {
    setDarkThemeState(!darkThemeState);
  }
  return (
    <Wrapper>
      <h1>Where in the world?</h1>
      <Button onClick={toggleTheme}>
        {darkThemeState ? (
          <span>
            <BsFillSunFill />
            Light Mode
          </span>
        ) : (
          <span>
            <BsMoonFill />
            Dark Mode
          </span>
        )}
      </Button>
    </Wrapper>
  );
};

export default Header;
