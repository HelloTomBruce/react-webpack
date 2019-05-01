import { take, call, put, fork, cancel, cancelled } from "redux-saga/effects";
import axios from "axios";

import {
    LOGIN_REQUEST,
    LOGOUT,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "../action-type/login";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const login = (username, password) => {
    let url = "http://yapi.demo.qunar.com/mock/33880/music/login";
    return axios.post(url, JSON.stringify({ username, password }));
};

const setToken = token => {
    window.document.localStorage.setItem("token", token);
};

const clearToken = () => {
    window.document.localStorage.removeItem("token");
};

function* watchLogin() {
    while (true) {
        const {
            payload: { user, password }
        } = yield take(LOGIN_REQUEST);
        const task = yield fork(authorize, user, password);
        const action = yield take([LOGOUT, LOGIN_ERROR]);
        if (action.type === LOGOUT) {
            yield cancel(task);
        }
        yield call(clearToken);
    }
}

function* authorize(user, password) {
    try {
        const {
            data: {
                data: { token }
            }
        } = yield call(login, user, password);
        yield put({
            type:    LOGIN_SUCCESS,
            payload: {
                token
            }
        });
        yield call(setToken, token);
        return token;
    } catch (error) {
        yield put({
            type:    LOGIN_ERROR,
            payload: {
                error
            }
        });
    } finally {
        if (yield cancelled()) {
            clearToken();
        }
    }
}

export default watchLogin;
