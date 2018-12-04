import { takeEvery } from 'redux-saga/effects'
import { handleFetchLoginState, handleLoginRequest } from '../sagas/login'
import { handleCreateMicropost } from '../sagas/micropost'

export default function* rootSaga() {
  yield takeEvery('FETCH_LOGIN_STATE', handleFetchLoginState)
  yield takeEvery('LOGIN_REQUEST', handleLoginRequest)
  yield takeEvery('CREATE_MICROPOST_REQUEST', handleCreateMicropost)
}
