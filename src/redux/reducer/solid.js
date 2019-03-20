import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../action-type/solid'

const initState = {
    isLogin: false,
    webId: ''
}

const solidReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                webId: action.payload.webId
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                webId: ''
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                webId: ''
            }
        default:
            return state
    }
}

export default solidReducer