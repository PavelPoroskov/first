import {
  USERS_LIST_REQUEST
} from './ActionTypes'

export const actRequestUsersList = (substring) => ({
  type: USERS_LIST_REQUEST,
  substring
})