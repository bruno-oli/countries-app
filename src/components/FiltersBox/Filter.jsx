import React from "react";
import styled from "styled-components";

import BoxShadow from "../../global/BoxShadow";

import { AiOutlineDown } from "react-icons/ai";

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
`;

const Filter = () => {
  return (
    <Wrapper>
      <option value="" selected>
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="ametica">America</option>
      <option value="asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Wrapper>
  );
};

export default Filter;
