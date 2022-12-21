import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";

import { CountriesContext } from "../../contexts/CountriesContext";

import ReactLoading from "react-loading";
import CountryBox from "./CountryBox";

const Wrapper = styled.section`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
`;

const LoadingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CountriesBox = () => {
  const { setCountries, loading, setLoading, error, setError, filteredCountries } =
    useContext(CountriesContext);
  const { colors } = useContext(ThemeContext)
  const API = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
  });
  useEffect(() => {
    API.get("all")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
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
        <LoadingBox>
          <ReactLoading
            height={"5rem"}
            width={"5rem"}
            type={"spin"}
            color={colors.text}
          />
        </LoadingBox>
      ) : (
        filteredCountries.map((i) => {
          return <CountryBox data={i} key={i.name.common} />;
        })
      )}
    </Wrapper>
  );
};

export default CountriesBox;
