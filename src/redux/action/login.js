import { LOGIN_REQUEST, LOGOUT } from '../action-type/login'

export const login = (user, password) => ({
    type: LOGIN_REQUEST,
    payload: {
        user,
        password
    }
})

export const logout = () => ({
    type: LOGOUT
})