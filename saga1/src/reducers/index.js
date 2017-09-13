import { combineReducers } from 'redux'
import {
  POSTS_FETCH_REQUESTED, 
  POSTS_FETCH_SUCCEEDED,
  POSTS_FETCH_FAILED
} from '../actions'

// const defaultState = {
//   isFetching: false,
//   posts: [],
//   lastUpdated: false  // false || Date
// }

const posts = (state = [], action) => {
  switch (action.type) {
//    case POSTS_FETCH_REQUESTED:
    case POSTS_FETCH_SUCCEEDED:
      return action.posts;
    case POSTS_FETCH_FAILED:
      return [];
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case POSTS_FETCH_REQUESTED:
      return true
    case POSTS_FETCH_SUCCEEDED:
      return false
    case POSTS_FETCH_FAILED:
      return false
    default:
      return state
  }
}

const lastUpdated = (state = false, action) => {
  switch (action.type) {
    // case POSTS_FETCH_REQUESTED:
    //   return state
    case POSTS_FETCH_SUCCEEDED:
      return action.receivedAt
    case POSTS_FETCH_FAILED:
      return false
    default:
      return state
  }
}


const rootReducer = combineReducers({
   posts,
   isFetching,
   lastUpdated
})

export default rootReducer
