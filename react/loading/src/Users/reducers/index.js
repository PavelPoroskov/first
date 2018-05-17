import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR
} from '../actions/ActionTypes'

const initialState = {
  data: [],
  error: false,
  isLoading: false
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return {
        data: [],
        isLoading: true,
        error: false
      }
    case USERS_LIST_SUCCESS:
      return {
        data: action.users,
        isLoading: false,
        error: false
      }
    case USERS_LIST_ERROR:
      return {
        data: [],
        isLoading: false,
        error: action.error
      } 
    default:
      return state
  }
}

export default list
