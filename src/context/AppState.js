import React, { useReducer } from "react"
import axios from "axios"
import StateContext from "./StateContext"
import ElemReducer from "./Reducer"
/* 
Objectives for this file: 
- Bring in Context and Reducer
- Init state
- useReducer
- Set up action functionality so that we can dispatch to the reducer which then changes the state (includes results of http requests)
- Return Context values as set through the useReducer hook (which returns state and dispatch. The former we can use to derive current state and set it to the context value so it can be provided).
*/

export const PeriodicProvider = ({ children }) => {
  const initialState = {
    elems: [],
    elem: {},
    block: [],
    loading: false,
    filtered: null,
  }

  const [state, dispatch] = useReducer(ElemReducer, initialState)

  // Fetch Data
  const fetchData = async () => {
    const res = await axios.get("https://periodic-table-rest-api.herokuapp.com/")
    dispatch({ type: "SET_DATA", payload: res.data })
  }

  // Set Block
  const getBlock = async (text) => {
    const res = await axios.get("https://neelpatel05.pythonanywhere.com/")
    const block = res.data.filter((elem) => elem.groupBlock === text)
    dispatch({ type: "SET_BLOCK", payload: block })
  }

  // Fetch Element
  const fetchElement = async (text) => {
    const res = await axios.get("https://neelpatel05.pythonanywhere.com/")
    const selected = (text) => res.data.find((elem) => elem.name.toLowerCase() === text.toLowerCase())
    dispatch({ type: "SET_ELEM", payload: selected })
  }

  // Search filter
  const filteredElements = (text) => {
    dispatch({ type: "FILTER_ELEMENTS", payload: text })
  }

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" })
  }

  // Set block
  const setBlock = (option) => {
    const blockFilter = state.elems.filter((el) => {
      return el.groupBlock === option
    })
    dispatch({ type: "SET_BLOCK", payload: blockFilter })
  }

  return (
    <StateContext.Provider
      value={{
        elems: state.elems,
        elem: state.elem,
        block: state.block,
        query: state.query,
        filtered: state.filtered,
        fetchData,
        getBlock,
        fetchElement,
        filteredElements,
        clearFilter,
        setBlock,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
