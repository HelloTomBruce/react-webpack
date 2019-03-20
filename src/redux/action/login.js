import { LOGIN_REQUEST, LOGOUT } from '../action-type/login'

export const login = () => ({
    type: LOGIN_REQUEST
})

export const logout = () => ({
    type: LOGOUT
})