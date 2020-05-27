import React from "react"
import styled from "styled-components"

const Card = styled.h3`
  font-weight: 500;
  color: green;
  margin: 0.2em;
`

const Symbol = styled.span`
  color: rebeccapurple;
  text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);
  font-size: 1.5rem;
`

const ElementCard = ({ name, atomicNumber, symbol }) => {
  return (
    <Card>
      <Symbol>{symbol}</Symbol>
      <div>
        {atomicNumber}: {name}
      </div>
    </Card>
  )
}

export default ElementCard
