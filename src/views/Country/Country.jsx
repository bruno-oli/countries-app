import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailContainer from "../../components/DetailCountry/DetailContainer";
import HomeLink from "../../components/DetailCountry/HomeLink";

import Loading from "../../components/Loading/Loading";

const Wrapper = styled.section`
  margin: 2rem 4rem;
  & > div {
    height: 50vh;
  }
  @media only screen and (max-width: 480px) {
    margin: 2rem;
  }
`

const Country = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => setData(response.data[0]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <HomeLink />
          <DetailContainer data={data} />
        </div>
      )}
    </Wrapper>
  );
};

export default Country;
