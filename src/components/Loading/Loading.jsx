import React, { useContext } from "react";
import ReactLoading from "react-loading";
import styled, { ThemeContext } from "styled-components";

const LoadingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Loading = () => {
  const {colors} = useContext(ThemeContext)
  return (
    <LoadingBox>
      <ReactLoading
        height={"5rem"}
        width={"5rem"}
        type={"spin"}
        color={colors.text}
      />
    </LoadingBox>
  );
};

export default Loading;
