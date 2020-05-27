import React from "react"
import styled from "styled-components"

const Card = styled.h3`
  font-weight: 500;
  color: green;
`

const ElementCard = ({ name, atomicNumber }) => {
  return (
    <Card>
      {atomicNumber}: {name}
    </Card>
  )
}

export default ElementCard
