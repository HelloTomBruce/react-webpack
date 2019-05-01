import { LOGIN_REQUEST, LOGOUT } from "../action-type/login";

export const login = name => ({
    type:    LOGIN_REQUEST,
    payload: {
        name
    }
});

export const logout = () => ({
    type: LOGOUT
});
