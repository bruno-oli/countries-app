import React from "react";
import styled from "styled-components";
import BoxShadow from "../../global/BoxShadow";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 6vw;
  img {
    height: 100%;
    box-shadow: ${BoxShadow};
  }
  & > div {
    color: ${(props) => props.theme.colors.text};
    align-self: center;
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    & > div {
      font-size: ${(props) => props.theme.fontSizes.detailPage};
      display: flex;
      gap: 12vw;
      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 40%;
        span {
          strong {
            font-weight: 600;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 2rem;
    & > div {
      & > div {
        flex-direction: column;
        gap: 3rem;
        & > div {
          max-width: 100%;
          gap: 1rem;
        }
      }
    }
  }
`;

const DetailContainer = ({ data }) => {
  const formatNumber = new Intl.NumberFormat("en-US");
  console.log(data);
  return (
    <Wrapper>
      <img src={data.flags.svg} alt="" />
      <div>
        <h1>{data.name.common}</h1>
        <div>
          <div>
            <span>
              <strong>Native Name: </strong>
              {data.name.official}
            </span>
            <span>
              <strong>Population: </strong>{" "}
              {formatNumber.format(data.population)}
            </span>
            <span>
              <strong>Region: </strong>
              {data.region}
            </span>
            <span>
              <strong>Sub Region: </strong>
              {data.subregion}
            </span>
            <span>
              <strong>Capital: </strong>
              {data.capital}
            </span>
          </div>
          <div>
            <span>
              <strong>Top Level Domain: </strong>
              {data.tld.map((i) => {
                return <span key={i}>{i} </span>;
              })}
            </span>
            <span>
              <strong>Currencies: </strong>
              {Object.keys(data.currencies)[0]}
            </span>
            <span>
              <strong>Languages: </strong>
              {Object.keys(data.languages).map((i) => {
                return <span key={i}>{i} </span>;
              })}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailContainer;
