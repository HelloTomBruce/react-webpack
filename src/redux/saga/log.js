import { takeEvery, select } from "redux-saga/effects"

function* logger(action) {
  const state = yield select()
  console.log("action:", action)
  console.log("after state:", state)
}

function* watchAndLog() {
  yield takeEvery("*", logger)
}

export default watchAndLog
