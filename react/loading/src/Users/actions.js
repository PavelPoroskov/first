export const USERS_LIST_REQUEST = 'USERS_LIST_REQUEST'
export const USERS_LIST_SUCCESS = 'USERS_LIST_SUCCESS'
export const USERS_LIST_ERROR = 'USERS_LIST_ERROR'

export const actRequestUsersList = (substring) => ({
  type: USERS_LIST_REQUEST,
  substring
})