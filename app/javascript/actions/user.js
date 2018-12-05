export const fetchUserRequest = ({ user }) => {
  return {
    type: 'FETCH_USER_REQUEST',
    user: user
  }
}

export const fetchUserSuccess = ({ user }) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user: user
  }
}

export const fetchUserFailure = () => {
  return {
    type: 'FETCH_USER_FAILURE'
  }
}
