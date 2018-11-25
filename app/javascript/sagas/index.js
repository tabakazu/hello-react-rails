import 'babel-polyfill'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { loginRequest } from '../actions/auth'

function* handleLogin(action) {
  try {
    const user = yield call(loginRequest, action.type);
    console.log('成功')
  } catch (e) {
    console.log('失敗')
  }
}

export default function* rootSaga() {
  yield takeEvery('AUTH_REQUEST', handleLogin);
}
