import React, { useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import StateContext from "../context/StateContext"
import { SearchBar } from "../styled/SearchBar"
import BlockFilter from "../components/BlockFilter"

const FilterBar = styled.nav`
  display: flex;
  width: 100%;
  min-height: 5vh;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 0.5rem;
  margin: 0 0 5px -7px;
  justify-content: space-evenly;
`
const NavItem = styled.div`
  width: 40%;
  height: 2.5rem;
  margin-right: 1rem;
  padding: 3px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;

  &.right {
    justify-content: flex-end;
    padding-right: 0.5rem;
  }
`

const Filter = (props) => {
  const { filteredElements, clearFilter, filtered } = useContext(StateContext)
  const text = useRef("")

  useEffect(() => {
    filtered === null && (text.current.value = "")
  })

  const handleChange = (e) => {
    if (text.current.value !== "") {
      filteredElements(e.target.value)
    } else {
      clearFilter()
    }
  }
  return (
    <FilterBar>
      <NavItem>
        <label htmlFor="search">
          <SearchBar ref={text} type="text" size="25" placeholder="Find an element..." onChange={handleChange} />
        </label>
      </NavItem>
      <NavItem className="right">
        <BlockFilter />
      </NavItem>
    </FilterBar>
  )
}

export default Filter
