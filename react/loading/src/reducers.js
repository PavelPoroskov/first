import { combineReducers } from 'redux'

import users from './Users/reducers'
import user from './User/reducers'
// import loginError from './loginerror'
// import users from './users'

const rootReducer = combineReducers({
  users,
  user
})

export default rootReducer
