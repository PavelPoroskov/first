import {REQUEST_DATA, SUCCESS_DATA} from './ActionTypes'

// Actions:
export const requestAction = (payload) => ({
    type: REQUEST_DATA,
    payload
  });

export const successAction = (payload) => ({
    type: SUCCESS_DATA,
    payload
  });

