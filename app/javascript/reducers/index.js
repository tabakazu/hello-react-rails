import { combineReducers } from 'redux'
import { loginReducer } from '../reducers/login'
import { micropostReducer } from '../reducers/micropost'

export const rootReducer = combineReducers({
  login: loginReducer,
  micropost: micropostReducer
})
