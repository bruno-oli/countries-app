import React from "react";
import styled from "styled-components";
import CountriesBox from "../../components/CountriesBox/CountriesBox";
import FiltersBox from "../../components/FiltersBox/FiltersBox";

import CountriesProvider from "../../contexts/CountriesContext";

const Wrapper = styled.main`
  padding: 2rem 4rem;
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <CountriesProvider>
        <FiltersBox />
        <CountriesBox />
      </CountriesProvider>
    </Wrapper>
  );
};

export default Home;
