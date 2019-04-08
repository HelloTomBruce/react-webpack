import { ADD, DEC } from "../action-type/count"

const initState = {
  num: 1
}

const CountReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + action.payload.num
      }
    case DEC:
      return {
        ...state,
        num: state.num - action.payload.num
      }
    default:
      return state
  }
}

export default CountReducer
