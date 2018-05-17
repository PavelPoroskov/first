import { combineReducers } from 'redux'

import users from './Users/reducers'
// import loginError from './loginerror'
// import users from './users'

const rootReducer = combineReducers({
  users
})

export default rootReducer
