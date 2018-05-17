import { all } from 'redux-saga/effects'

import users from './Users/sagas'
import user from './User/sagas'
//import getUsersList from './users'
// import doUser from './user'

export default function * rootSaga () {
  yield all([
    users(),
    user()
    //getUsersList()//, 
    //doUser(),
  ])
}