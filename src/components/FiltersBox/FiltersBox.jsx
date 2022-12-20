import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import Input from './Input'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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