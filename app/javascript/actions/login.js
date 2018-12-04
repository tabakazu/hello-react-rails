export const fetchLoginState = () => {
  return {
    type: 'FETCH_LOGIN_STATE'
  }
}

export const setLoginState = ({ user }) => {
  return {
    type: 'SET_LOGIN_STATE',
    user: user
  }
}

export const loginRequest = ({ user }) => {
  return {
    type: 'LOGIN_REQUEST',
    user: user
  }
}
