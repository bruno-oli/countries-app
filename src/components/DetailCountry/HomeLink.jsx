import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BsArrowLeftShort } from "react-icons/bs";
import BoxShadow from "../../global/BoxShadow";

const Wrapper = styled.div`
  width: 10rem;
  gap: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.element};
  color: ${props => props.theme.colors.text};
  box-shadow: ${BoxShadow};
  padding: .5rem 2rem;
  font-size: ${props => props.theme.fontSizes.detailPage};
  margin-bottom: 3rem;
`;

const HomeLink = () => {
  return (
    <Link to={"/countries-app/"}>
      <Wrapper>
        <BsArrowLeftShort />
        <span>Back</span>
      </Wrapper>
    </Link>
  );
};

export default HomeLink;
