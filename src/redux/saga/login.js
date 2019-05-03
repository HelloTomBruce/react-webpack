import { take, call, put, fork, cancel, cancelled } from "redux-saga/effects";
import {
    LOGIN_REQUEST,
    LOGOUT,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "../action-type/login";
import { SHOW_ERROR_TIP } from "../action-type/error";
import CONFIG from "@/config";
import Storage from "@/utils/localStorage";
import request from "@/utils/request";

const login = name => {
    let url = CONFIG.API.login;
    return request.post(url, { name });
};

const setToken = token => {
    Storage.setItem("token", token);
};

const clearToken = () => {
    Storage.removeItem("token");
};

function* watchLogin() {
    while (true) {
        const {
            payload: { name, cbk }
        } = yield take(LOGIN_REQUEST);
        const task = yield fork(authorize, name, cbk);
        const action = yield take([LOGOUT, LOGIN_ERROR]);
        if (action.type === LOGOUT) {
            yield cancel(task);
        }
        yield call(clearToken);
    }
}

function* authorize(name, cbk) {
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
        cbk();
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
