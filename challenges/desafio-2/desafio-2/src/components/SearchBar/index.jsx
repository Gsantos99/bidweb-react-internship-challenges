import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  /* background-color: blue; */
  width: 100vw;
  padding: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  
  input {
    width: 450px;
    padding: 10px;
    border-radius: 100px;
  }

  div {
    background-color: #3fabc5 ;
    border-radius: 100px;
    display: flex;
    gap: 10px;
    padding: 10px;
  }
  

`

const SearchBar = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default SearchBar

SearchBar.propTypes = {
  children: HTMLElement | React.Children | null
}
