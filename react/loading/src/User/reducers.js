import {
  USER_SAVE_REQUEST,
  USER_SAVE_SUCCESS,
  USER_SAVE_ERROR,

  USER_NEW,

  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR
} from './actions'

const initialState = {
  data: null,
  errorLoad: false,
  isLoading: false,

  errorSave: false,
  isSaving: false
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case USER_NEW:
      return {
        ...initialState,
        data: {}
      }
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

    case USER_SAVE_REQUEST:
      return {
        ...state,
        isSaving: true
      }
    case USER_SAVE_SUCCESS:
      const fromObj = action.user
      let toObj = state.data
      if (typeof toObj !== 'object') {
        toObj = {}
      }
      Object.keys(fromObj).forEach(key => {
        toObj[key] = fromObj[key]
      })
      return {
        ...state,
        data: toObj,
        isSaving: false,
      }
      // return {
      //   ...state,
      //   data: {...state.data, ...action.user},
      //   isSaving: false,
      // }
    case USER_SAVE_ERROR:
      return {
        ...state,
        isSaving: false,
        errorLoad: action.error
      }       
    default:
      return state
  }
}

export default list
