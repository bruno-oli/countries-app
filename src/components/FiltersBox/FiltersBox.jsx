import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import Input from './Input'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem;
  }
`

const FiltersBox = () => {
  return (
    <Wrapper>
      <Input />
      <Filter />
    </Wrapper>
  )
}

export default FiltersBox