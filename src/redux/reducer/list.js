import { GET_SUCCESS } from '../action-type/list'

const initState = {
    list: []
}

const listReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_SUCCESS:
            return {
                ...state,
                list: action.payload.list
            }
        default:
            return state
    }
}

export default listReducer