import { combineReducers } from 'redux';
import {
  ADD_GAME,
} from './actions';

const initialData = [
  'Fallout 3',
  'Fallout 4',
  'Fallout 76',
];

export function games(state = initialData, action) {
  switch (action.type) {
    case ADD_GAME:
      // return [action.title, ...state];
      const newArray = state.concat([action.title]);
      return newArray.sort()
    default:
      return state;
  }
}

export default combineReducers({
  games,
});