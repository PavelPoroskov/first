import { REQUEST_DATA, SUCCESS_DATA } from '../actions/ActionTypes'

const isLoading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return true;
    case SUCCESS_DATA:
      return false;
    default:
      return state;
  }
}

export default isLoading