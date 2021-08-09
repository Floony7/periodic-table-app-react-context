import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import StateContext from "../context/StateContext"
import ElementCard from "./ElementCard"

const List = styled.div`
  margin: 0 auto;
  width: 100%;
  /* display: flex;
  justify-content: space-evenly; */
  /* flex: 1;
  flex-flow: row wrap; */
  display: grid;
`

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  flex-wrap: wrap;
  flex-shrink: 1;
  width: 75%;
`

const StyledLi = styled.li`
  display: flex;
  margin: 5px;
  background-color: #e3e3e3;
  padding: 0.2rem 0.5rem;
  transform: skewX(-10deg);
  text-align: center;
`

const ElementList2 = () => {
  const { fetchData, elems, filtered } = useContext(StateContext)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <List>
      <StyledUl>
        {filtered !== null
          ? filtered.map((elem) => (
              <StyledLi key={elem.atomicNumber}>
                <ElementCard name={elem.name} atomicNumber={elem.atomicNumber} symbol={elem.symbol} />
              </StyledLi>
            ))
          : elems.map((elem) => (
              <StyledLi key={elem.atomicNumber}>
                <ElementCard name={elem.name} atomicNumber={elem.atomicNumber} symbol={elem.symbol} />
              </StyledLi>
            ))}
      </StyledUl>
    </List>
  )
}

export default ElementList2
