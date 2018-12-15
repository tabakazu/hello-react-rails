import 'babel-polyfill'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchFollowState, setFollowState, followFailure } from '../actions/follow'

export function* handleFetchFollowState(action){
  try {
    const token = localStorage.getItem('token')

    if (token) {
      const headers = { headers: { 'Authorization': token }}
      const loginUser = yield axios.get(`/api/v1/auth/user`, headers)
      const loginUserFollowing = yield axios.get(`/api/v1/users/` + loginUser.data.name + `/following` , headers)
      const pageUser = yield axios.get(`/api/v1/users/` + action.user.name)
      const checkFollowingById = loginUserFollowing.data.map((i) => i.id).find(i => i == pageUser.data.id)

      if (checkFollowingById) {
        yield put(setFollowState({ isFollowing: true }))
      } else {
        yield put(setFollowState({ isFollowing: false }))
      }
    }
  } catch (e) {
    yield put(followFailure())
    console.log(e.message)
  }
}

export function* handleCreateFollow(action) {
  try {
    const token = localStorage.getItem('token')

    if (token) {
      const pageUser = yield axios.get(`/api/v1/users/` + action.user.name)
      const headers = { headers: { 'Authorization': token }}
      const follow = { followed_id: pageUser.data.id }

      yield axios.post(`/api/v1/follow`, follow, headers)
      yield put(fetchFollowState({
        user: {
          name: pageUser.data.name
        }
      }))
    }
  } catch (e) {
    yield put(followFailure())
    console.log(e.message)
  }
}

export function* handleDeleteFollow(action) {
  try {
    const token = localStorage.getItem('token')

    if (token) {
      const pageUser = yield axios.get(`/api/v1/users/` + action.user.name)
      const config = {
        headers: { 'Authorization': token },
        data: { followed_id: pageUser.data.id }
      }

      yield axios.delete(`/api/v1/follow`, config)
      yield put(fetchFollowState({
        user: {
          name: pageUser.data.name
        }
      }))
    }
  } catch (e) {
    yield put(followFailure())
    console.log(e.message)
  }
}
