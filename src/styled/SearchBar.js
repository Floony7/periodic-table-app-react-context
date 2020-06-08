import styled from "styled-components"

export const SearchBar = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: none;
  color: #000;
  width: 60%;
  font-family: "Mitr", sans-serif;
  background-color: lightgreen;
  margin: 0 0 0 5px;

  @media (max-width: 768px) {
    width: 90%;
  }

  &:focus {
    outline: none;
    border: none;
  }
`
