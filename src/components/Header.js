import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  font-size: calc(7vw + 2rem);
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-top: -2rem;
  margin-bottom: 0.3rem;
`

const Header = (props) => {
  return <H1>Periodic Table</H1>
}

export default Header
