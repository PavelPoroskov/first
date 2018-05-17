import {
  USER_REQUEST,
  USER_SAVE_REQUEST
} from './ActionTypes'

export const actRequestUser = (id) => ({
  type: USER_REQUEST,
  id
})

export const actRequestSaveUser = (obj) => ({
  type: USER_SAVE_REQUEST,
  data: obj
})
