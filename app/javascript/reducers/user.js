const initialState = {
  isFailed: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST': {
      return state
    }
    case 'FETCH_USER_SUCCESS': {
      return {
        id: action.user.id,
        name: action.user.name,
        email: action.user.email,
        microposts: action.user.microposts,
        isFailed: false
      }
    }
    case 'FETCH_USER_FAILURE': {
      return {
        isFailed: true
      }
    }
    default:
      return state
  }
}
