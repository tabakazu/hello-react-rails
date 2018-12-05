const initialState = {
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST': {
      return state
    }
    case 'FETCH_USER_SUCCESS': {
      return {
        name: action.user.name,
        email: action.user.email
      }
    }
    case 'FETCH_USER_FAILURE': {
      return state
    }
    default:
      return state
  }
}
