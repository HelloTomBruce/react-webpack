import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../action-type/login"

const initState = {
  isLogin: false,
  token:   ""
}

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token:   action.payload.token
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLogin: false,
        token:   ""
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        token:   ""
      }
    default:
      return state
  }
}

export default LoginReducer
