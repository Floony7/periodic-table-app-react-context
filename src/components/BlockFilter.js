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
      <option value="" disabled>
        Sort by Element Group Block
      </option>
      <option value="">All elements</option>
      <option value="nonmetal">Nonmetal</option>
      <option value="noble gas">Noble gas</option>
      <option value="alkaline earth metal">Alkaline Earth Metal</option>
      <option value="metalloid">Metalloid</option>
      <option value="alkali metal">Alkali Metal</option>
      <option value="metal">Metal</option>
      <option value="halogen">Halogen</option>
      <option value="transition metal">Transition Metal</option>
      <option value="lanthanide">Lanthanide</option>
      <option value="post-transition metal">Post Transition</option>
      <option value="actinoid">Actinoid</option>
    </StyledSelect>
  )
}

export default BlockFilter
