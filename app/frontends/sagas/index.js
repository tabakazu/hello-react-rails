import { takeEvery } from 'redux-saga/effects'
import { handleFetchLoginState, handleLoginRequest } from '../sagas/login'
import { handleCreateMicropost } from '../sagas/micropost'
import { handleFetchUser } from '../sagas/user'
import { handleFetchFollowState, handleCreateFollow, handleDeleteFollow } from '../sagas/follow'

export default function* rootSaga() {
  yield takeEvery('FETCH_LOGIN_STATE', handleFetchLoginState)
  yield takeEvery('LOGIN_REQUEST', handleLoginRequest)
  yield takeEvery('CREATE_MICROPOST_REQUEST', handleCreateMicropost)
  yield takeEvery('FETCH_USER_REQUEST', handleFetchUser)
  yield takeEvery('FETCH_FOLLOW_STATE', handleFetchFollowState)
  yield takeEvery('CREATE_FOLLOW_REQUEST', handleCreateFollow)
  yield takeEvery('DELETE_FOLLOW_REQUEST', handleDeleteFollow)
}
