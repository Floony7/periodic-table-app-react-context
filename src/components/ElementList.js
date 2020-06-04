import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ElementCard from "./ElementCard"
const endpoint = "https://neelpatel05.pythonanywhere.com/"

const List = styled.div`
  margin: 0 auto;
  width: 90vw;
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

const ElementList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    /*  const fetchData = async () => {
      const res = await fetch(endpoint)
      const resData = await res.json()
      setData(resData)
    }
    if (data !== []) {
      fetchData()
    }
    console.log(data) */
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => setData(result))
  }, [])

  return (
    <List>
      <StyledUl>
        {data.map((elem) => (
          <StyledLi key={elem.atomicNumber}>
            <ElementCard name={elem.name} atomicNumber={elem.atomicNumber} symbol={elem.symbol} />
          </StyledLi>
        ))}
      </StyledUl>
    </List>
  )
}

export default ElementList
