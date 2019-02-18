import { take, takeLatest, call, put, fork, cancel, canceled } from 'redux-saga/effects'
import { login, setToken } from '../../api/login'
import { LOGIN_REQUEST, LOGOUT, LOGIN_ERROR, LOGIN_SUCCESS } from '../action-type/login'

function* watchLogin () {
    while (true) {
        const { payload: {user, password }} = yield take(LOGIN_REQUEST)
        const task = yield fork(authorize, user, password)
        const action = yield take([LOGOUT, LOGIN_ERROR])
        if (action.type === LOGOUT) {
            yield cancel(task)
        }
        yield call(Api.clearToken)
    }
}

function* authorize (user, password) {
    try {
        const {data: {data: {token}}} = yield call(login, user, password)
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                token
            }
        })
        yield call(setToken, token)
        return token
    } catch (error) {
        yield put({
            type: LOGIN_ERROR,
            payload: {
                error
            }
        })
    } finally {
        if (yield cancelled()) {
            
        }
    }
}

export default watchLogin