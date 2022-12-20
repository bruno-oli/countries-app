import React from "react";
import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";

import BoxShadow from "../../global/BoxShadow"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 22rem;
  background-color: ${props => props.theme.colors.element};
  box-shadow: ${BoxShadow};
  padding: 0.6rem 1.5rem;
  input {
    width: 80%;
    background: none;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.input};
    ::placeholder {
      color: ${props => props.theme.colors.input};
      font-weight: 600;
    }
  }
  svg {
    color: ${props => props.theme.colors.input};
    font-size: 1.5rem;
  }
`;

const Input = () => {
  return (
    <Wrapper>
      <AiOutlineSearch />
      <input placeholder="Search for a country..." type="search" />
    </Wrapper>
  );
};

export default Input;
