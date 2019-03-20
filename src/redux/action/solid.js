import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../action-type/solid'

export const login = (res) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            webId: res.webId
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}