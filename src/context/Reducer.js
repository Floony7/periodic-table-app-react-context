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
    case "SET_ELEM":
      return {
        ...state,
        elem: action.payload,
        loading: false,
      }
    case "SET_BLOCK":
      return {
        ...state,
        block: action.payload,
        loading: false,
      }
    case "SEARCH": {
      return {
        ...state,
        repos: action.payload,
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
