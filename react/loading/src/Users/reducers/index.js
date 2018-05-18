import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR
} from '../actions/ActionTypes'

const initialState = {
//  data: [],
  data: null,
  error: false,
  isLoading: false
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return {
        ...initialState,
        isLoading: true,
        error: false
      }
    case USERS_LIST_SUCCESS:
      return {
        ...state,
        data: action.users,
        isLoading: false
      }
    case USERS_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      } 
    default:
      return state
  }
}

export default list
