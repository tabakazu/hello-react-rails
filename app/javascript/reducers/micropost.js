const initialState = {
}

export const micropostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MICROPOST_REQUEST': {
      return state
    }
    case 'CREATE_MICROPOST_SUCCESS': {
      return state
    }
    case 'CREATE_MICROPOST_FAILURE': {
      return state
    }
    default:
      return state
  }
}
