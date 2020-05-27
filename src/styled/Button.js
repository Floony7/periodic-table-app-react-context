import styled, { css } from "styled-components"

const StyledButton = styled.button`
  padding: 1rem;
  border: none;
  background-color: palevioletred;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 5px;
  margin: 0.1rem 0.2rem;
  cursor: pointer;
`

const PrimaryBtn = styled(StyledButton)`
  background-color: blueviolet;
`

const SuccessBtn = styled(StyledButton)`
  background-color: green;
`

const AlertBtn = styled(StyledButton)`
  background-color: tomato;
`

export { StyledButton, PrimaryBtn, SuccessBtn, AlertBtn }
