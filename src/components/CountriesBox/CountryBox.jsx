import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BoxShadow from "../../global/BoxShadow";

const Wrapper = styled.div`
  cursor: pointer;
  width: 20rem;
  flex-direction: column;
  background-color: ${BoxShadow};
  display: flex;
  color: ${(props) => props.theme.colors.text};
  flex-direction: column;
  border-radius: 0.2rem;
  overflow: hidden;
  .image__box {
    width: 100%;
    img {
      width: 100%;
      height: 12rem;
    }
  }
  .details {
    width: 100%;
    padding: 1rem 1rem 2rem 1rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    span {
      strong {
        font-weight: 600;
      }
    }
  }
`;

const CountryBox = ({ data }) => {
  const formatNumber = new Intl.NumberFormat("en-US");
  return (
    <Link to={`country/${data.cca2}`}>
      <Wrapper>
        <div className="image__box">
          <img src={data.flags.png} alt="" />
        </div>
        <div className="details">
          <h1>{data.name.common}</h1>
          <span>
            <strong>Population:</strong> {formatNumber.format(data.population)}
          </span>
          <span>
            <strong>Region:</strong> {data.region}
          </span>
          <span>
            <strong>Capital:</strong> {data.capital}
          </span>
        </div>
      </Wrapper>
    </Link>
  );
};

export default CountryBox;
