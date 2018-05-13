import { REQUEST_DATA, SUCCESS_DATA } from '../actions/ActionTypes'

const data = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return state;
    case SUCCESS_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default data