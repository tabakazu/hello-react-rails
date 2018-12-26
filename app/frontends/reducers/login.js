const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isFailed: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOGIN_STATE': {
      return {
        isLoading: true
      }
    }
    case 'SET_LOGIN_STATE': {
      return {
        isLoggedIn: true,
        isLoading: false,
        user: action.user
      }
    }
    case 'LOGIN_REQUEST': {
      return state
    }
    case 'LOGIN_FAILURE': {
      return {
        isLoading: false,
        isFailed: true
      }
    }
    default:
      return state
  }
}
