export const fetchFollowState = ({ user }) => {
  return {
    type: 'FETCH_FOLLOW_STATE',
    user: user
  }
}

export const setFollowState = ({ isFollowing }) => {
  return {
    type: 'SET_FOLLOW_STATE',
    isFollowing: isFollowing
  }
}

export const createFollowtRequest = ({ user }) => {
  return {
    type: 'CREATE_FOLLOW_REQUEST',
    user: user
  }
}

export const deleteFollowtRequest = ({ user }) => {
  return {
    type: 'DELETE_FOLLOW_REQUEST',
    user: user
  }
}

export const followFailure = () => {
  return {
    type: 'FOLLOW_FAILURE'
  }
}
