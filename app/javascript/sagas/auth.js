import { take, call, put } from 'redux-saga/effects'
import { LOGIN_REQUESTING } from '../actions/auth'

export function* handleLogin() {
  while (true) {
    const action = yield take(LOGIN_REQUESTING)
    console.log(action)
  }
}
