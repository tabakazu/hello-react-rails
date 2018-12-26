const initialState = {
  isFailed: false,
  isFollowing: false
}

export const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FOLLOW_STATE': {
      return state
    }
    case 'SET_FOLLOW_STATE': {
      return {
        isFollowing: action.isFollowing
      }
    }
    case 'CREATE_FOLLOW_REQUEST': {
      return state
    }
    case 'DELETE_FOLLOW_REQUEST': {
      return state
    }
    case 'FOLLOW_FAILURE': {
      return {
        isFailed: true
      }
    }
    default:
      return state
  }
}
