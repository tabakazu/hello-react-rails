import { takeEvery } from 'redux-saga/effects'
import { handleLogin, handleFetchLoginState } from '../sagas/login'

export default function* rootSaga() {
  yield takeEvery('AUTH_REQUEST', handleLogin)
  yield takeEvery('AUTH_STATE_REQUEST', handleFetchLoginState)
}
