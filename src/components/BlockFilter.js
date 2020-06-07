import React, { useContext } from "react"
import StateContext from "../context/StateContext"
import styled from "styled-components"

const StyledSelect = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: none;
  color: #000;
  font-family: "Mitr", sans-serif;
  background-color: lightgreen;
  margin: 0 0 0 5px;
  width: 60%;
`

const BlockFilter = (props) => {
  const { setBlock, clearFilter } = useContext(StateContext)

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setBlock(e.target.value)
    } else {
      clearFilter()
    }
  }
  return (
    <StyledSelect onChange={handleChange}>
      <option value="">All elements</option>
      <option value="nonmetal">Nonmetals</option>
      <option value="noble gas">Noble gases</option>
      <option value="alkaline earth metal">Alkaline Earth Metals</option>
      <option value="metalloid">Metalloids</option>
      <option value="alkali metal">Alkali Metals</option>
      <option value="metal">Metalloids</option>
      <option value="halogen">Halogens</option>
      <option value="transition metal">Transition Metals</option>
      <option value="lanthanoid">Lanthanoids</option>
      <option value="post-transition metal">Post Transition metals</option>
      <option value="actinoid">Actinoids</option>
    </StyledSelect>
  )
}

export default BlockFilter
