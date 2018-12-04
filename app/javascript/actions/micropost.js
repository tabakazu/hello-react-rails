export const createMicropostRequest = ({ micropost }) => {
  return {
    type: 'CREATE_MICROPOST_REQUEST',
    micropost: micropost
  }
}

export const createMicropostSuccess = () => {
  return {
    type: 'CREATE_MICROPOST_SUCCESS'
  }
}

export const createMicropostFailure = () => {
  return {
    type: 'CREATE_MICROPOST_FAILURE'
  }
}
