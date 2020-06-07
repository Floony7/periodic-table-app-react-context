/* const elemReducer = (state, action) => {
  if (action.type === "SET_DATA") {
    return action.payload
  } else {
    throw new Error("Could not fetch the elements")
  }
} */
// Types:
// SET_DATA
// SEARCH
// SET_BLOCK

export default (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        elems: action.payload,
        loading: false,
      }
    case "FILTER_ELEMENTS":
      return {
        ...state,
        filtered: state.elems.filter((elem) => {
          const regex = new RegExp(`${action.payload}`, "gi")
          return elem.name.match(regex) || elem.symbol.match(regex)
        }),
        loading: false,
      }
    case "CLEAR_FILTER":
      return {
        ...state,
        filtered: null,
        block: null,
      }
    case "SET_ELEM":
      return {
        ...state,
        elem: action.payload,
        loading: false,
      }
    case "SET_BLOCK":
      return {
        ...state,
        filtered: action.payload,
        loading: false,
      }
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      }
    case "SEARCH": {
      return {
        ...state,
        elems: action.payload,
        loading: false,
      }
    }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
