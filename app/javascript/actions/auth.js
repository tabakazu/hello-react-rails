export const fetchLoginStateRequest = () => {
  return {
    type: 'AUTH_STATE_REQUEST',
  }
}

export const loginRequest = ({ user }) => {
  return {
    type: 'AUTH_REQUEST',
    user: user
  }
}

export const login = ({ user }) => {
  return {
    type: 'AUTH_SUCCESS',
    user: user
  }
}
