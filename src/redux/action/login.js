import { LOGIN_REQUEST, LOGOUT } from "../action-type/login";

export const login = (name, cbk) => ({
    type:    LOGIN_REQUEST,
    payload: {
        name,
        cbk
    }
});

export const logout = () => ({
    type: LOGOUT
});
