export const createMicropostRequest = ({ micropost }) => {
  return {
    type: 'CREATE_MICROPOST_REQUEST',
    micropost: micropost
  }
}

export const successCreateMicropost = () => {
  return {
    type: 'CREATE_MICROPOST_SUCCESS'
  }
}

export const failureCreateMicropost = () => {
  return {
    type: 'CREATE_MICROPOST_FAILURE'
  }
}
