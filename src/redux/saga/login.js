import { take, call, put, fork, cancel, cancelled } from "redux-saga/effects";
import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGOUT,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "../action-type/login";
import { SHOW_ERROR_TIP } from "../action-type/error";
import CONFIG from "@/config";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const login = name => {
    let url = `${CONFIG.API}/index/login`;
    return axios.post(url, { name });
};

const setToken = token => {
    window.localStorage.setItem("token", token);
};

const clearToken = () => {
    window.localStorage.removeItem("token");
};

function* watchLogin() {
    while (true) {
        const {
            payload: { name }
        } = yield take(LOGIN_REQUEST);
        const task = yield fork(authorize, name);
        const action = yield take([LOGOUT, LOGIN_ERROR]);
        if (action.type === LOGOUT) {
            yield cancel(task);
        }
        yield call(clearToken);
    }
}

function* authorize(name) {
    try {
        const {
            data: { token }
        } = yield call(login, name);
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
        yield put({
            type:    SHOW_ERROR_TIP,
            payload: {
                msg: CONFIG.TipConfig[error.response.data.code]
            }
        });
    } finally {
        if (yield cancelled()) {
            clearToken();
        }
    }
}

export default watchLogin;
