import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../../contexts/CountriesContext";

import BoxShadow from "../../global/BoxShadow";

const Wrapper = styled.select`
  width: 12rem;
  background-color: ${(props) => props.theme.colors.element};
  box-shadow: ${BoxShadow};
  padding: 0.75rem 1.5rem;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.input};
  font-weight: 600;
  appearance: none;
  border-radius: 0.2rem;
`;

const Filter = () => {
  const { filter, setFilter } = useContext(CountriesContext);
  return (
    <Wrapper
      value={filter}
      onChange={(e) => {
        if (
          e.target.value === "Africa" ||
          e.target.value === "America" ||
          e.target.value === "Asia" ||
          e.target.value === "Europe" ||
          e.target.value === "Oceania"
        ) {
          setFilter(e.target.value);
        } else {
          setFilter("");
        }
      }}
    >
      <option defaultValue>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Wrapper>
  );
};

export default Filter;
