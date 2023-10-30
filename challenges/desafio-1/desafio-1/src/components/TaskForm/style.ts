import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  gap: 5px;

  input {
    border-radius: 5px;
    padding: 5px;
    width: 400px;
  }

  input:active {
    border-color: rgba(244, 130, 31, 1);
  }

  button {
    padding: 10px;
    border-radius: 5px;
    background-color: gray;
  }

  button:active {
    background-color: lightgrey;
  }
`
