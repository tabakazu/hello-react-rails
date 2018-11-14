import { call, fork } from 'redux-saga/effects'
import * as auth from './auth'
import 'babel-polyfill'

function* IndexSaga() {
  console.log('Hello Sagas!')
  yield fork(auth.handleLogin)
}

export default IndexSaga
