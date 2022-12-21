import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";

import BoxShadow from "../../global/BoxShadow";
import { CountriesContext } from "../../contexts/CountriesContext";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 20rem;
  background-color: ${(props) => props.theme.colors.element};
  box-shadow: ${BoxShadow};
  padding: 0.6rem 1.5rem;
  border-radius: 0.2rem;
  input {
    width: 80%;
    background: none;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.input};
    ::placeholder {
      color: ${(props) => props.theme.colors.input};
      font-weight: 600;
    }
  }
  svg {
    color: ${(props) => props.theme.colors.input};
    font-size: 1.5rem;
  }
`;

const Input = () => {
  const { search, setSearch } = useContext(CountriesContext);
  return (
    <Wrapper>
      <AiOutlineSearch />
      <input
        placeholder="Search for a country..."
        value={search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Wrapper>
  );
};

export default Input;
