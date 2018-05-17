import {
  // USER_SAVE_REQUEST,
  // USER_SAVE_SUCCESS,
  // USER_SAVE_ERROR,

  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR
} from '../actions/ActionTypes'

const initialState = {
  data: null,
  errorLoad: false,
  isLoading: false,

  errorSave: false,
  isSaveing: false
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...initialState,
        isLoading: true
      }
    case USER_SUCCESS:
      return {
        ...state,
        data: action.user,
        isLoading: false,
      }
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorLoad: action.error
      } 
    default:
      return state
  }
}

export default list
