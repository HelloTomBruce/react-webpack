import { put, takeLatest, call } from 'redux-saga/effects'
import { GET_LIST, GET_SUCCESS, GET_ERROR } from '../action-type/list'
import { getList } from '../../api'

function* watchGetList () {
    yield takeLatest(GET_LIST, fetchData)
}

function* fetchData(action) {
    try {
        const res = yield call(getList, action.payload.url)
        yield put({
            type: GET_SUCCESS,
            payload: {
                list: res.data.data.list
            }
        })
    } catch (err) {
        yield put({
            type: GET_ERROR,
            err
        })
    }
}

export default watchGetList