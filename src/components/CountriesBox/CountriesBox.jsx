import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";

import { CountriesContext } from "../../contexts/CountriesContext";

import CountryBox from "./CountryBox";
import Loading from "../Loading/Loading"

const Wrapper = styled.section`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
  @media only screen and (max-width: 480px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const CountriesBox = () => {
  const { setCountries, loading, setLoading, error, setError, filteredCountries } =
    useContext(CountriesContext);
  const API = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
  });
  useEffect(() => {
    API.get("all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        filteredCountries.map((i) => {
          return <CountryBox data={i} key={i.name.common} />;
        })
      )}
    </Wrapper>
  );
};

export default CountriesBox;
