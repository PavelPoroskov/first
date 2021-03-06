export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'

export const USER_SAVE_REQUEST = 'USER_SAVE_REQUEST'
export const USER_SAVE_SUCCESS = 'USER_SAVE_SUCCESS'
export const USER_SAVE_ERROR = 'USER_SAVE_ERROR'

export const USER_NEW = 'USER_NEW'
// export const USER_END = 'USER_END'


export const actRequestUser = (id) => ({
  type: USER_REQUEST,
  id
})

export const actNewUser = () => ({
  type: USER_NEW
})

export const actRequestSaveUser = (obj) => ({
  type: USER_SAVE_REQUEST,
  data: obj
})
