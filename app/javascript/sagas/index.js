import { takeEvery } from 'redux-saga/effects'
import { handleLogin, handleFetchLoginState } from '../sagas/login'
import { handleCreateMicropost } from '../sagas/micropost'

export default function* rootSaga() {
  yield takeEvery('LOGIN_STATE_REQUEST', handleFetchLoginState)
  yield takeEvery('LOGIN_REQUEST', handleLogin)
  yield takeEvery('CREATE_MICROPOST_REQUEST', handleCreateMicropost)
}
