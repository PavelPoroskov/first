import { combineReducers } from 'redux'

import data from './data'
import isLoading from './isLoading'

const rootReducer = combineReducers({
  isLoading,
  data  
})

export default rootReducer