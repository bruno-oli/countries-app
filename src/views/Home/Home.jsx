import React from 'react'
import styled from 'styled-components'
import FiltersBox from '../../components/FiltersBox/FiltersBox'

const Wrapper = styled.main`
  padding: 2rem 4rem;
`

const Home = () => {
  return (
    <Wrapper>
      <FiltersBox />
    </Wrapper>
  )
}

export default Home